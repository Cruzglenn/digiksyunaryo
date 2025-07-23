/**
 * Google reCAPTCHA Service - Modern React/TypeScript Implementation
 * Uses functional programming patterns and composition over inheritance
 */

export interface RecaptchaVerificationResult {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  error_codes?: string[];
  message?: string;
}

export interface RecaptchaConfig {
  siteKey: string;
  secretKey?: string;
  theme?: 'light' | 'dark';
  size?: 'compact' | 'normal' | 'invisible';
  badge?: 'bottomright' | 'bottomleft' | 'inline';
}

// Global configuration - using module-level state instead of singleton class
let globalConfig: RecaptchaConfig | null = null;

/**
 * Initialize reCAPTCHA configuration
 */
export const initializeRecaptcha = (config: RecaptchaConfig): void => {
  globalConfig = { ...config };
};

/**
 * Get current reCAPTCHA configuration
 */
export const getRecaptchaConfig = (): RecaptchaConfig => {
  if (!globalConfig) {
    throw new Error('reCAPTCHA not initialized. Call initializeRecaptcha() first.');
  }
  return { ...globalConfig };
};

/**
 * Get the site key for client-side usage
 */
export const getSiteKey = (): string => {
  // Initialize with default config if not already initialized
  if (!globalConfig) {
    initializeRecaptcha({
      siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LdHPnwrAAAAAKZXLhpLAtcefbSpH3KrYtctOC4a',
      theme: 'light',
      size: 'normal'
    });
  }

  const config = getRecaptchaConfig();
  return config.siteKey;
};

/**
 * Validate reCAPTCHA token format (pure function)
 */
export const validateTokenFormat = (token: string | null): boolean => {
  if (!token || token.trim() === '') {
    return false;
  }

  // Basic token format validation
  // reCAPTCHA tokens are typically long base64-like strings
  const tokenPattern = /^[A-Za-z0-9_-]+$/;
  return tokenPattern.test(token) && token.length > 20;
};

/**
 * Verify reCAPTCHA token with Google's API (pure async function)
 * Note: This should be called from a backend service in production
 */
export const verifyTokenWithGoogle = async (
  token: string,
  secretKey: string,
  remoteIp?: string
): Promise<RecaptchaVerificationResult> => {
  try {
    if (!secretKey) {
      throw new Error('Secret key is required for server-side verification');
    }

    const params = new URLSearchParams({
      secret: secretKey,
      response: token,
    });

    if (remoteIp) {
      params.append('remoteip', remoteIp);
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
      message: result.success ? 'Verification successful' : 'Verification failed'
    };

  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return {
      success: false,
      error_codes: ['network-error'],
      message: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

/**
 * Check if reCAPTCHA is loaded and ready (pure function)
 */
export const isRecaptchaLoaded = (): boolean => {
  return typeof window !== 'undefined' &&
         typeof (window as any).grecaptcha !== 'undefined' &&
         typeof (window as any).grecaptcha.render === 'function';
};

/**
 * Load reCAPTCHA script dynamically (pure async function)
 */
export const loadRecaptchaScript = async (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (isRecaptchaLoaded()) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));

    document.head.appendChild(script);
  });
};

/**
 * Reset reCAPTCHA widget (pure function)
 */
export const resetRecaptcha = (widgetId?: number): void => {
  if (isRecaptchaLoaded()) {
    if (widgetId !== undefined) {
      (window as any).grecaptcha.reset(widgetId);
    } else {
      (window as any).grecaptcha.reset();
    }
  }
};

/**
 * Get response from reCAPTCHA widget (pure function)
 */
export const getRecaptchaResponse = (widgetId?: number): string | null => {
  if (isRecaptchaLoaded()) {
    return (window as any).grecaptcha.getResponse(widgetId);
  }
  return null;
};

/**
 * Initialize reCAPTCHA with environment configuration
 */
export const initializeRecaptchaFromEnv = (overrides?: Partial<RecaptchaConfig>): void => {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    throw new Error('VITE_RECAPTCHA_SITE_KEY environment variable is required');
  }

  const config: RecaptchaConfig = {
    siteKey,
    theme: 'light',
    size: 'normal',
    badge: 'bottomright',
    ...overrides
  };

  initializeRecaptcha(config);
};

// Auto-initialize with environment variables
if (typeof window !== 'undefined' && import.meta.env.VITE_RECAPTCHA_SITE_KEY) {
  initializeRecaptchaFromEnv();
}
