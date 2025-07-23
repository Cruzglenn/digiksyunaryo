/**
 * Backend API Template for reCAPTCHA Verification
 * This is a Node.js/Express example for server-side verification
 * 
 * To use this:
 * 1. Create a backend service (Node.js, Python, PHP, etc.)
 * 2. Implement this verification endpoint
 * 3. Update the frontend to call this endpoint instead of direct Google API
 */

const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:8080'],
  credentials: true
}));

// Rate limiting for reCAPTCHA verification
const recaptchaLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: {
    error: 'Too many verification attempts, please try again later.'
  }
});

app.use(express.json({ limit: '10mb' }));

/**
 * reCAPTCHA Verification Endpoint
 * POST /api/verify-recaptcha
 */
app.post('/api/verify-recaptcha', recaptchaLimiter, async (req, res) => {
  try {
    const { token, action } = req.body;
    
    // Validate input
    if (!token) {
      return res.status(400).json({
        success: false,
        message: 'reCAPTCHA token is required'
      });
    }

    // Get client IP
    const clientIp = req.ip || 
                    req.connection.remoteAddress || 
                    req.socket.remoteAddress ||
                    (req.connection.socket ? req.connection.socket.remoteAddress : null);

    // Verify with Google
    const verificationResult = await verifyRecaptchaWithGoogle(token, clientIp);
    
    // Additional security checks
    if (verificationResult.success) {
      // For reCAPTCHA v3, check score
      if (verificationResult.score !== undefined) {
        const minScore = 0.5; // Adjust based on your needs
        if (verificationResult.score < minScore) {
          return res.status(400).json({
            success: false,
            message: 'Verification failed: suspicious activity detected',
            score: verificationResult.score
          });
        }
      }

      // Check action if provided
      if (action && verificationResult.action !== action) {
        return res.status(400).json({
          success: false,
          message: 'Verification failed: action mismatch'
        });
      }

      // Check hostname (optional)
      const allowedHostnames = process.env.ALLOWED_HOSTNAMES?.split(',') || [];
      if (allowedHostnames.length > 0 && !allowedHostnames.includes(verificationResult.hostname)) {
        return res.status(400).json({
          success: false,
          message: 'Verification failed: hostname not allowed'
        });
      }
    }

    // Return result
    res.json({
      success: verificationResult.success,
      message: verificationResult.success ? 'Verification successful' : 'Verification failed',
      score: verificationResult.score,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error during verification'
    });
  }
});

/**
 * Verify reCAPTCHA token with Google's API
 */
async function verifyRecaptchaWithGoogle(token, remoteIp) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    throw new Error('RECAPTCHA_SECRET_KEY environment variable is not set');
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
    error_codes: result['error-codes'] || []
  };
}

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'reCAPTCHA Verification API'
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`reCAPTCHA verification server running on port ${PORT}`);
});

module.exports = app;

/**
 * Environment Variables Required:
 * 
 * RECAPTCHA_SECRET_KEY=your_secret_key_here
 * ALLOWED_ORIGINS=http://localhost:8080,https://yourdomain.com
 * ALLOWED_HOSTNAMES=localhost,yourdomain.com
 * PORT=3001
 * 
 * Package.json dependencies:
 * {
 *   "dependencies": {
 *     "express": "^4.18.0",
 *     "cors": "^2.8.5",
 *     "express-rate-limit": "^6.7.0",
 *     "helmet": "^6.1.0"
 *   }
 * }
 */
