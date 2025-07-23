import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { cn } from '@/lib/utils';
import { Shield, AlertCircle } from 'lucide-react';
import { getSiteKey } from '@/services/RecaptchaService';

export interface RecaptchaProps {
  onChange?: (token: string | null) => void;
  onExpired?: () => void;
  onError?: (error: Error) => void;
  theme?: 'light' | 'dark';
  size?: 'compact' | 'normal' | 'invisible';
  className?: string;
  disabled?: boolean;
  required?: boolean;
  showLabel?: boolean;
  label?: string;
  errorMessage?: string;
}

export interface RecaptchaRef {
  reset: () => void;
  execute: () => void;
  getResponse: () => string | null;
}

const RecaptchaComponent = forwardRef<RecaptchaRef, RecaptchaProps>(({
  onChange,
  onExpired,
  onError,
  theme = 'light',
  size = 'normal',
  className,
  disabled = false,
  required = false,
  showLabel = true,
  label = 'Patunayan na hindi ka robot',
  errorMessage,
  ...props
}, ref) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const siteKey = getSiteKey();

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setHasError(false);
    },
    execute: () => {
      if (recaptchaRef.current && size === 'invisible') {
        recaptchaRef.current.execute();
      }
    },
    getResponse: () => {
      if (recaptchaRef.current) {
        return recaptchaRef.current.getValue();
      }
      return null;
    }
  }));

  useEffect(() => {
    // Load reCAPTCHA script if not already loaded
    const loadRecaptchaScript = () => {
      if (document.querySelector('script[src*="recaptcha"]')) {
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setIsLoaded(true);
      };
      script.onerror = () => {
        setHasError(true);
      };
      document.head.appendChild(script);
    };

    // Set a timeout to show reCAPTCHA even if script loading detection fails
    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    // Check if reCAPTCHA is already loaded
    const checkLoaded = () => {
      if (typeof window !== 'undefined' &&
          typeof (window as any).grecaptcha !== 'undefined' &&
          typeof (window as any).grecaptcha.render === 'function') {
        clearTimeout(fallbackTimer);
        setIsLoaded(true);
      } else {
        loadRecaptchaScript();
        setTimeout(checkLoaded, 1000);
      }
    };

    checkLoaded();

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleChange = (token: string | null) => {
    setHasError(false);
    if (onChange) {
      onChange(token);
    }
  };

  const handleExpired = () => {
    setHasError(false);
    if (onExpired) {
      onExpired();
    }
  };

  const handleError = () => {
    setHasError(true);
    const errorObj = new Error('reCAPTCHA error occurred');
    console.error('reCAPTCHA error:', errorObj);
    if (onError) {
      onError(errorObj);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Use the siteKey from the service

  if (!siteKey) {
    return (
      <div className={cn(
        "flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700",
        className
      )}>
        <AlertCircle className="h-4 w-4 flex-shrink-0" />
        <span className="text-sm">reCAPTCHA configuration error: Site key not found</span>
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      {showLabel && (
        <label className="text-base font-medium flex items-center text-gray-700 mb-2">
          <Shield className="mr-2 h-4 w-4 text-maroon" />
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className={cn(
        "flex flex-col space-y-3",
        disabled && "opacity-50 pointer-events-none"
      )}>
        {/* Simple reCAPTCHA Container */}
        <div className={cn(
          "flex justify-center items-center",
          "min-h-[78px]", // Standard reCAPTCHA height
          className
        )}>
          {hasError ? (
            <div className="text-center p-4 border border-red-300 rounded bg-red-50">
              <p className="text-red-600 text-sm mb-2">Hindi ma-load ang reCAPTCHA</p>
              <button
                onClick={() => {
                  setHasError(false);
                  setIsLoaded(false);
                  window.location.reload();
                }}
                className="text-xs text-red-500 underline"
              >
                I-reload ang page
              </button>
            </div>
          ) : !isLoaded ? (
            <div className="flex items-center gap-2 text-gray-500">
              <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-maroon"></div>
              <span className="text-sm">Naglo-load ang reCAPTCHA...</span>
            </div>
          ) : (
            <div className={cn(
              "recaptcha-wrapper",
              hasError && "ring-2 ring-red-500 ring-opacity-50 rounded"
            )}>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={siteKey}
                onChange={handleChange}
                onExpired={handleExpired}
                onError={handleError}
                onLoad={handleLoad}
                theme={theme}
                size={size}
                {...props}
              />
            </div>
          )}
        </div>


        {/* Error State */}
        {hasError && (
          <div className="flex items-center justify-center mt-2 p-2 bg-red-50 border border-red-200 rounded text-red-600" role="alert">
            <AlertCircle className="h-4 w-4 flex-shrink-0 mr-2" />
            <span className="text-xs">
              {errorMessage || 'May problema sa reCAPTCHA. Pakisubukang muli.'}
            </span>
          </div>
        )}
      </div>

      {/* Help Text */}
      {required && (
        <div className="text-center mt-2">
          <p className="text-gray-600 text-xs">
            Kailangan mo itong kumpletuhin upang maipasa ang inyong feedback.
          </p>
        </div>
      )}
    </div>
  );
});

RecaptchaComponent.displayName = 'Recaptcha';

export { RecaptchaComponent as Recaptcha };
export default RecaptchaComponent;
