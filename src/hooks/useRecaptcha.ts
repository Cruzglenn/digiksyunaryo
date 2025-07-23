/**
 * Custom React Hook for reCAPTCHA functionality
 * Modern React/TypeScript approach using hooks and functional programming
 */

import { useCallback, useEffect, useState, useRef } from 'react';
import { 
  getSiteKey, 
  validateTokenFormat, 
  isRecaptchaLoaded, 
  loadRecaptchaScript,
  resetRecaptcha as resetRecaptchaWidget,
  getRecaptchaResponse
} from '../services/RecaptchaService';

export interface UseRecaptchaOptions {
  onSuccess?: (token: string) => void;
  onError?: (error: Error) => void;
  onExpired?: () => void;
  autoLoad?: boolean;
}

export interface UseRecaptchaReturn {
  isLoaded: boolean;
  isLoading: boolean;
  error: Error | null;
  token: string | null;
  siteKey: string;
  reset: () => void;
  execute: () => void;
  getResponse: () => string | null;
  validateToken: (token: string | null) => boolean;
}

/**
 * Custom hook for reCAPTCHA functionality
 */
export const useRecaptcha = (options: UseRecaptchaOptions = {}): UseRecaptchaReturn => {
  const { onSuccess, onError, onExpired, autoLoad = true } = options;
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const widgetIdRef = useRef<number | null>(null);

  // Get site key
  const siteKey = getSiteKey();

  // Load reCAPTCHA script
  const loadScript = useCallback(async () => {
    if (isRecaptchaLoaded()) {
      setIsLoaded(true);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await loadRecaptchaScript();
      setIsLoaded(true);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to load reCAPTCHA');
      setError(error);
      onError?.(error);
    } finally {
      setIsLoading(false);
    }
  }, [onError]);

  // Reset reCAPTCHA
  const reset = useCallback(() => {
    if (widgetIdRef.current !== null) {
      resetRecaptchaWidget(widgetIdRef.current);
    } else {
      resetRecaptchaWidget();
    }
    setToken(null);
    setError(null);
  }, []);

  // Execute reCAPTCHA (for invisible reCAPTCHA)
  const execute = useCallback(() => {
    if (isRecaptchaLoaded() && widgetIdRef.current !== null) {
      (window as any).grecaptcha.execute(widgetIdRef.current);
    }
  }, []);

  // Get current response
  const getResponse = useCallback(() => {
    if (widgetIdRef.current !== null) {
      return getRecaptchaResponse(widgetIdRef.current);
    }
    return getRecaptchaResponse();
  }, []);

  // Validate token format
  const validateToken = useCallback((tokenToValidate: string | null) => {
    return validateTokenFormat(tokenToValidate);
  }, []);

  // Handle token change
  const handleTokenChange = useCallback((newToken: string | null) => {
    setToken(newToken);
    if (newToken && validateTokenFormat(newToken)) {
      onSuccess?.(newToken);
    }
  }, [onSuccess]);

  // Handle token expiration
  const handleTokenExpired = useCallback(() => {
    setToken(null);
    onExpired?.();
  }, [onExpired]);

  // Handle errors
  const handleError = useCallback((err?: Error) => {
    const error = err || new Error('reCAPTCHA error occurred');
    setError(error);
    setToken(null);
    onError?.(error);
  }, [onError]);

  // Auto-load script on mount
  useEffect(() => {
    if (autoLoad) {
      loadScript();
    }
  }, [autoLoad, loadScript]);

  // Check if already loaded on mount
  useEffect(() => {
    if (isRecaptchaLoaded()) {
      setIsLoaded(true);
    }
  }, []);

  return {
    isLoaded,
    isLoading,
    error,
    token,
    siteKey,
    reset,
    execute,
    getResponse,
    validateToken,
  };
};

/**
 * Hook for reCAPTCHA verification with additional security checks
 */
export interface UseRecaptchaVerificationOptions {
  minScore?: number;
  maxAge?: number;
  expectedAction?: string;
}

export interface UseRecaptchaVerificationReturn {
  verify: (token: string, options?: UseRecaptchaVerificationOptions) => Promise<{
    success: boolean;
    message: string;
    score?: number;
  }>;
  isVerifying: boolean;
  verificationError: Error | null;
}

export const useRecaptchaVerification = (): UseRecaptchaVerificationReturn => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState<Error | null>(null);

  const verify = useCallback(async (
    token: string, 
    options: UseRecaptchaVerificationOptions = {}
  ) => {
    setIsVerifying(true);
    setVerificationError(null);

    try {
      // Basic token validation
      if (!validateTokenFormat(token)) {
        throw new Error('Invalid token format');
      }

      // In a real application, this would call your backend API
      // For now, we'll simulate the verification
      const mockVerification = {
        success: true,
        score: 0.9,
        message: 'Verification successful'
      };

      // Apply security checks
      if (options.minScore && mockVerification.score && mockVerification.score < options.minScore) {
        return {
          success: false,
          message: `Score too low: ${mockVerification.score} (minimum: ${options.minScore})`
        };
      }

      return mockVerification;

    } catch (error) {
      const err = error instanceof Error ? error : new Error('Verification failed');
      setVerificationError(err);
      return {
        success: false,
        message: err.message
      };
    } finally {
      setIsVerifying(false);
    }
  }, []);

  return {
    verify,
    isVerifying,
    verificationError
  };
};

/**
 * Hook for form integration with reCAPTCHA
 */
export interface UseRecaptchaFormOptions {
  required?: boolean;
  onTokenChange?: (token: string | null) => void;
}

export const useRecaptchaForm = (options: UseRecaptchaFormOptions = {}) => {
  const { required = true, onTokenChange } = options;
  const [formToken, setFormToken] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const recaptcha = useRecaptcha({
    onSuccess: (token) => {
      setFormToken(token);
      setFormError(null);
      onTokenChange?.(token);
    },
    onError: (error) => {
      setFormToken(null);
      setFormError(error.message);
      onTokenChange?.(null);
    },
    onExpired: () => {
      setFormToken(null);
      setFormError(required ? 'reCAPTCHA expired. Please try again.' : null);
      onTokenChange?.(null);
    }
  });

  const validateForm = useCallback(() => {
    if (required && !formToken) {
      setFormError('Please complete the reCAPTCHA verification');
      return false;
    }
    return true;
  }, [required, formToken]);

  const resetForm = useCallback(() => {
    recaptcha.reset();
    setFormToken(null);
    setFormError(null);
  }, [recaptcha]);

  return {
    ...recaptcha,
    formToken,
    formError,
    validateForm,
    resetForm,
    isValid: required ? !!formToken : true
  };
};
