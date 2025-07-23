/**
 * reCAPTCHA Verification Service - Modern React/TypeScript Implementation
 * Uses functional programming patterns and pure functions
 */

import { RecaptchaVerificationResult, verifyTokenWithGoogle } from './RecaptchaService';

export interface VerificationRequest {
  token: string;
  remoteIp?: string;
  action?: string;
}

export interface VerificationResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  error_codes?: string[];
  message: string;
}

export interface SecurityCheckOptions {
  minScore?: number;
  expectedAction?: string;
  maxAge?: number; // in seconds
}

/**
 * Enhanced token format validation (pure function)
 */
export const validateTokenFormat = (token: string): { valid: boolean; message: string } => {
  if (!token || token.trim() === '') {
    return { valid: false, message: 'reCAPTCHA token is required' };
  }

  // Basic token format validation
  const tokenPattern = /^[A-Za-z0-9_-]+$/;
  if (!tokenPattern.test(token)) {
    return { valid: false, message: 'Invalid reCAPTCHA token format' };
  }

  if (token.length < 20) {
    return { valid: false, message: 'reCAPTCHA token too short' };
  }

  if (token.length > 2000) {
    return { valid: false, message: 'reCAPTCHA token too long' };
  }

  return { valid: true, message: 'Token format is valid' };
};

/**
 * Get user-friendly error message from error codes (pure function)
 */
export const getErrorMessage = (errorCodes?: string[]): string => {
  if (!errorCodes || errorCodes.length === 0) {
    return 'Verification failed';
  }

  const errorMessages: Record<string, string> = {
    'missing-input-secret': 'The secret parameter is missing',
    'invalid-input-secret': 'The secret parameter is invalid or malformed',
    'missing-input-response': 'The response parameter is missing',
    'invalid-input-response': 'The response parameter is invalid or malformed',
    'bad-request': 'The request is invalid or malformed',
    'timeout-or-duplicate': 'The response is no longer valid: either is too old or has been used previously'
  };

  const primaryError = errorCodes[0];
  return errorMessages[primaryError] || `Verification failed: ${primaryError}`;
};

/**
 * Verify reCAPTCHA token with Google's API (pure async function)
 */
export const verifyWithGoogle = async (
  request: VerificationRequest,
  secretKey: string
): Promise<VerificationResponse> => {
  try {
    const params = new URLSearchParams({
      secret: secretKey,
      response: request.token,
    });

    if (request.remoteIp) {
      params.append('remoteip', request.remoteIp);
    }

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    return {
      success: result.success || false,
      score: result.score,
      action: result.action,
      challenge_ts: result.challenge_ts,
      hostname: result.hostname,
      error_codes: result['error-codes'] || [],
      message: result.success ? 'Verification successful' : getErrorMessage(result['error-codes'])
    };

  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return {
      success: false,
      error_codes: ['network-error'],
      message: error instanceof Error ? error.message : 'Network error occurred during verification'
    };
  }
};

/**
 * Verify token with additional security checks (pure async function)
 */
export const verifyWithSecurityChecks = async (
  request: VerificationRequest,
  secretKey: string,
  options: SecurityCheckOptions = {}
): Promise<VerificationResponse> => {
  // First validate token format
  const formatValidation = validateTokenFormat(request.token);
  if (!formatValidation.valid) {
    return {
      success: false,
      message: formatValidation.message,
      error_codes: ['invalid-token-format']
    };
  }

  // Verify with Google
  const googleResult = await verifyWithGoogle(request, secretKey);

  if (!googleResult.success) {
    return googleResult;
  }

  // Additional security checks for v3
  if (googleResult.score !== undefined && options.minScore !== undefined) {
    if (googleResult.score < options.minScore) {
      return {
        success: false,
        score: googleResult.score,
        message: `Score too low: ${googleResult.score} (minimum: ${options.minScore})`,
        error_codes: ['low-score']
      };
    }
  }

  // Check expected action for v3
  if (options.expectedAction && googleResult.action !== options.expectedAction) {
    return {
      success: false,
      action: googleResult.action,
      message: `Unexpected action: ${googleResult.action} (expected: ${options.expectedAction})`,
      error_codes: ['wrong-action']
    };
  }

  // Check token age
  if (options.maxAge && googleResult.challenge_ts) {
    const challengeTime = new Date(googleResult.challenge_ts);
    const now = new Date();
    const ageInSeconds = (now.getTime() - challengeTime.getTime()) / 1000;

    if (ageInSeconds > options.maxAge) {
      return {
        success: false,
        challenge_ts: googleResult.challenge_ts,
        message: `Token too old: ${ageInSeconds}s (maximum: ${options.maxAge}s)`,
        error_codes: ['token-expired']
      };
    }
  }

  return {
    ...googleResult,
    message: 'Verification successful with all security checks passed'
  };
};

/**
 * Utility function to get secret key from environment
 */
export const getSecretKey = (): string => {
  // WARNING: This is for development only!
  // In production, secret keys should NEVER be exposed to client-side
  // This should be handled by a backend API endpoint
  console.warn('⚠️ SECRET KEY ACCESS: This should be moved to server-side in production!');
  return 'DEVELOPMENT_ONLY_NOT_FOR_PRODUCTION';
};

/**
 * Convenience function for verification with default secret key
 */
export const verifyToken = async (
  request: VerificationRequest,
  options?: SecurityCheckOptions
): Promise<VerificationResponse> => {
  const secretKey = getSecretKey();
  return verifyWithSecurityChecks(request, secretKey, options);
};
