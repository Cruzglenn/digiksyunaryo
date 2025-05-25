// Security utilities for Digiksyunaryo application

/**
 * Anti-Debugging Protections
 * Makes it harder for users to debug the application
 */
export const enableAntiDebugging = () => {
  try {
    if (process.env.NODE_ENV === 'production') {
      // Detect DevTools opening
      const devToolsDetector = () => {
        try {
          const widthThreshold = window.outerWidth - window.innerWidth > 160;
          const heightThreshold = window.outerHeight - window.innerHeight > 160;
          
          // Check for devtools using dimension differences
          if (
            widthThreshold || 
            heightThreshold ||
            window.outerWidth - window.innerWidth > 160 ||
            window.outerHeight - window.innerHeight > 160
          ) {
            // Instead of replacing entire body, show a message
            const warningDiv = document.createElement('div');
            warningDiv.style.position = 'fixed';
            warningDiv.style.top = '0';
            warningDiv.style.left = '0';
            warningDiv.style.width = '100%';
            warningDiv.style.padding = '10px';
            warningDiv.style.backgroundColor = 'red';
            warningDiv.style.color = 'white';
            warningDiv.style.textAlign = 'center';
            warningDiv.style.zIndex = '9999';
            warningDiv.textContent = 'Debugging is not allowed on this site';
            
            // Add to body if not already present
            if (!document.querySelector('[data-debug-warning="true"]')) {
              warningDiv.setAttribute('data-debug-warning', 'true');
              document.body.appendChild(warningDiv);
            }
            return true;
          }
          
          // Remove warning if present and not needed
          const warning = document.querySelector('[data-debug-warning="true"]');
          if (warning) {
            warning.remove();
          }
          return false;
        } catch (e) {
          console.error("Error in devTools detector:", e);
          return false;
        }
      };

      setInterval(devToolsDetector, 1000);
      
      // Right-click blocking disabled as requested
      // Uncomment the code below to re-enable right-click blocking when needed
      /*
      document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
      });
      */

      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      try {
        document.addEventListener('keydown', (e) => {
          if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) ||
            (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
          ) {
            e.preventDefault();
            return false;
          }
        });
      } catch (e) {
        console.error("Error setting up key blocking:", e);
      }
      
      // Additional console protection
      try {
        const consoleMessages = [
          'BABALA: Hindi pinapayagan ang debugging sa site na ito.',
          'WARNING: Debugging is not allowed on this site.',
          'Unauthorized attempts to debug this site may be logged and reported.'
        ];

        // Safely override console methods
        const originalConsole = { ...console };
        const consoleMethods = ['log', 'debug', 'info', 'warn', 'error'];
        
        consoleMethods.forEach(method => {
          if (originalConsole[method]) {
            console[method] = (...args) => {
              if (process.env.NODE_ENV !== 'production') {
                originalConsole[method](...args);
              } else {
                const randomIndex = Math.floor(Math.random() * consoleMessages.length);
                originalConsole.warn(consoleMessages[randomIndex]);
              }
            };
          }
        });
      } catch (e) {
        console.error("Error setting up console protection:", e);
      }
      
      // Additional protection by evaluating debugger statement
      try {
        setInterval(() => {
          function checkDebugger() {
            const start = new Date().getTime();
            debugger;
            const end = new Date().getTime();
            
            // If debugger is active, execution will pause and the time difference will be significant
            if (end - start > 100) {
              // Show warning instead of replacing body
              const warningDiv = document.createElement('div');
              warningDiv.style.position = 'fixed';
              warningDiv.style.top = '0';
              warningDiv.style.left = '0';
              warningDiv.style.width = '100%';
              warningDiv.style.padding = '10px';
              warningDiv.style.backgroundColor = 'red';
              warningDiv.style.color = 'white';
              warningDiv.style.textAlign = 'center';
              warningDiv.style.zIndex = '9999';
              warningDiv.textContent = 'Debugging detected and not allowed on this site';
              
              // Add to body if not already present
              if (!document.querySelector('[data-debug-warning="true"]')) {
                warningDiv.setAttribute('data-debug-warning', 'true');
                document.body.appendChild(warningDiv);
              }
            }
          }
          
          // Execute check inside try-catch to prevent errors
          try {
            checkDebugger();
          } catch (e) {
            // Silent catch
          }
        }, 1000);
      } catch (e) {
        console.error("Error setting up debugger detection:", e);
      }
    }
  } catch (e) {
    console.error("Error in enableAntiDebugging:", e);
  }
};

/**
 * Content Security Policy setup
 * Returns headers to be added to HTML meta tags
 */
export const getCSPSettings = () => {
  return {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", "https://*.googleapis.com", "https://*.gstatic.com", "https://*.google.com"],
    'style-src': ["'self'", "'unsafe-inline'", "https://*.googleapis.com"],
    'img-src': ["'self'", "data:", "https://*.googleapis.com", "https://*.gstatic.com", "https://*.google.com"],
    'font-src': ["'self'", "https://*.gstatic.com"],
    'connect-src': ["'self'", "https://*.googleapis.com", "https://*.google.com"],
    'frame-src': ["'self'", "https://*.google.com", "https://*.gstatic.com", "https://*.googleapis.com"],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'upgrade-insecure-requests': []
  };
};

/**
 * Basic XSS Protection
 * Sanitizes input to prevent XSS attacks
 */
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

/**
 * Rate limiter for form submissions
 * Prevents form spam attacks
 */
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private maxAttempts: number;
  private timeWindow: number;

  constructor(maxAttempts = 5, timeWindow = 60000) { // Default: 5 attempts per minute
    this.maxAttempts = maxAttempts;
    this.timeWindow = timeWindow;
  }

  canProceed(identifier: string): boolean {
    try {
      const now = Date.now();
      
      // Get or initialize attempts
      let attemptTimestamps = this.attempts.get(identifier) || [];
      
      // Remove old timestamps
      attemptTimestamps = attemptTimestamps.filter(timestamp => now - timestamp < this.timeWindow);
      
      // Check if too many attempts
      if (attemptTimestamps.length >= this.maxAttempts) {
        return false;
      }
      
      // Add current attempt
      attemptTimestamps.push(now);
      this.attempts.set(identifier, attemptTimestamps);
      
      return true;
    } catch (e) {
      console.error("Error in canProceed:", e);
      return true; // Fail open in case of error
    }
  }

  getRemainingAttempts(identifier: string): number {
    try {
      const now = Date.now();
      const attemptTimestamps = this.attempts.get(identifier) || [];
      const validAttempts = attemptTimestamps.filter(timestamp => now - timestamp < this.timeWindow);
      return Math.max(0, this.maxAttempts - validAttempts.length);
    } catch (e) {
      console.error("Error in getRemainingAttempts:", e);
      return this.maxAttempts; // Return max in case of error
    }
  }

  getTimeToReset(identifier: string): number | null {
    try {
      const now = Date.now();
      const attemptTimestamps = this.attempts.get(identifier) || [];
      
      if (attemptTimestamps.length === 0) {
        return null;
      }
      
      const oldestTimestamp = Math.min(...attemptTimestamps);
      return Math.max(0, this.timeWindow - (now - oldestTimestamp));
    } catch (e) {
      console.error("Error in getTimeToReset:", e);
      return null;
    }
  }
}

// Generate CSRF Token using crypto for better security
export const generateCSRFToken = (): string => {
  try {
    // Use crypto API if available for better randomness
    if (window.crypto && window.crypto.getRandomValues) {
      const array = new Uint8Array(32);
      window.crypto.getRandomValues(array);
      return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }
    
    // Fallback to less secure method
    return Array(40)
      .fill(0)
      .map(() => Math.random().toString(36).charAt(2))
      .join('');
  } catch (e) {
    console.error("Error generating CSRF token:", e);
    // Simple fallback in case of error
    return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
  }
};

// Store CSRF token in sessionStorage
export const setCSRFToken = (): string => {
  try {
    const token = generateCSRFToken();
    sessionStorage.setItem('csrf_token', token);
    return token;
  } catch (e) {
    console.error("Error storing CSRF token:", e);
    return '';
  }
};

// Validate CSRF token
export const validateCSRFToken = (token: string): boolean => {
  try {
    return token === sessionStorage.getItem('csrf_token');
  } catch (e) {
    console.error("Error validating CSRF token:", e);
    return false;
  }
};

/**
 * Encrypts data for storage using a secret key (now from environment variable)
 * Note: This is basic obfuscation, not strong encryption.
 */
export const obfuscateStorageData = (data: string): string => {
  try {
    const key = import.meta.env.VITE_DIGIKSYUNARYO_SECRET_KEY as string;
    if (!key) {
      console.error("VITE_DIGIKSYUNARYO_SECRET_KEY is not set in environment variables.");
      return data; // Or throw an error, depending on desired behavior
    }
    let obfuscated = '';
    for (let i = 0; i < data.length; i++) {
      obfuscated += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return btoa(obfuscated); // Base64 encode to make it URL-safe and less obviously patterned
  } catch (e) {
    console.error("Error obfuscating data:", e);
    return data; // Return original data in case of error
  }
};

/**
 * Decrypts data from storage using a secret key (now from environment variable)
 */
export const deobfuscateStorageData = (obfuscatedData: string): string => {
  try {
    const key = import.meta.env.VITE_DIGIKSYUNARYO_SECRET_KEY as string;
    if (!key) {
      console.error("VITE_DIGIKSYUNARYO_SECRET_KEY is not set in environment variables.");
      return obfuscatedData; // Or throw an error
    }
    const bytes = atob(obfuscatedData); // Decode Base64
    let deobfuscated = '';
    for (let i = 0; i < bytes.length; i++) {
      deobfuscated += String.fromCharCode(bytes.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return deobfuscated;
  } catch (e) {
    console.error("Error deobfuscating data:", e);
    return obfuscatedData; // Return original data in case of error
  }
};

// Monitor for suspicious behavior
export const monitorSuspiciousBehavior = () => {
  try {
    let consecutiveErrors = 0;
    let rapidActionCount = 0;
    let lastActionTime = Date.now();
    
    // Listen for JavaScript errors
    window.addEventListener('error', () => {
      try {
        consecutiveErrors++;
        
        // Too many errors might indicate automated tools or attack attempts
        if (consecutiveErrors > 10) {
          console.warn('Suspicious behavior detected: multiple JavaScript errors');
          // Could implement additional measures here
        }
      } catch (e) {
        console.error("Error in error event listener:", e);
      }
    });
    
    // Monitor user actions to detect automation
    const userActionEvents = ['click', 'mousemove', 'keydown'];
    
    userActionEvents.forEach(eventType => {
      try {
        document.addEventListener(eventType, () => {
          try {
            const now = Date.now();
            const timeDiff = now - lastActionTime;
            
            if (timeDiff < 50) { // Actions less than 50ms apart are suspicious
              rapidActionCount++;
            } else {
              // Reset counter if actions are normally paced
              rapidActionCount = Math.max(0, rapidActionCount - 1);
            }
            
            if (rapidActionCount > 20) {
              console.warn('Suspicious behavior detected: automated actions');
              // Could implement additional security measures
            }
            
            lastActionTime = now;
          } catch (e) {
            console.error(`Error in ${eventType} event handler:`, e);
          }
        });
      } catch (e) {
        console.error(`Error adding ${eventType} event listener:`, e);
      }
    });
  } catch (e) {
    console.error("Error in monitorSuspiciousBehavior:", e);
  }
};
