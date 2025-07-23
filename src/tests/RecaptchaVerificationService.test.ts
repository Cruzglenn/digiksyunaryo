/**
 * Unit Tests for RecaptchaVerificationService
 */

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { RecaptchaVerificationService, createVerificationService } from '../services/RecaptchaVerificationService';

// Mock process.env
Object.defineProperty(process, 'env', {
  value: {
    RECAPTCHA_SECRET_KEY: 'test-secret-key-123'
  },
  writable: true
});

describe('RecaptchaVerificationService', () => {
  let service: RecaptchaVerificationService;

  beforeEach(() => {
    vi.clearAllMocks();
    service = createVerificationService();
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Singleton Pattern', () => {
    it('should return the same instance', () => {
      const service1 = createVerificationService();
      const service2 = createVerificationService();
      expect(service1).toBe(service2);
    });
  });

  describe('Token Format Validation', () => {
    it('should validate correct token format', () => {
      const validToken = 'abcdefghijklmnopqrstuvwxyz123456789';
      const result = service.validateTokenFormat(validToken);
      expect(result.valid).toBe(true);
      expect(result.message).toBe('Token format is valid');
    });

    it('should reject empty token', () => {
      const result = service.validateTokenFormat('');
      expect(result.valid).toBe(false);
      expect(result.message).toBe('reCAPTCHA token is required');
    });

    it('should reject token with invalid characters', () => {
      const invalidToken = 'invalid@token#with$special%chars';
      const result = service.validateTokenFormat(invalidToken);
      expect(result.valid).toBe(false);
      expect(result.message).toBe('Invalid reCAPTCHA token format');
    });

    it('should reject short token', () => {
      const shortToken = 'short';
      const result = service.validateTokenFormat(shortToken);
      expect(result.valid).toBe(false);
      expect(result.message).toBe('reCAPTCHA token too short');
    });

    it('should reject very long token', () => {
      const longToken = 'a'.repeat(2001);
      const result = service.validateTokenFormat(longToken);
      expect(result.valid).toBe(false);
      expect(result.message).toBe('reCAPTCHA token too long');
    });
  });

  describe('Google API Verification', () => {
    it('should verify token successfully', async () => {
      const mockResponse = {
        success: true,
        challenge_ts: '2024-01-01T00:00:00Z',
        hostname: 'localhost',
        score: 0.9
      };

      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const result = await service.verifyWithGoogle({ token: 'valid-token' });
      
      expect(result.success).toBe(true);
      expect(result.score).toBe(0.9);
      expect(result.message).toBe('Verification successful');
    });

    it('should handle verification failure', async () => {
      const mockResponse = {
        success: false,
        'error-codes': ['invalid-input-response']
      };

      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const result = await service.verifyWithGoogle({ token: 'invalid-token' });
      
      expect(result.success).toBe(false);
      expect(result.error_codes).toContain('invalid-input-response');
      expect(result.message).toBe('The response parameter is invalid or malformed');
    });

    it('should include remote IP in request', async () => {
      const mockResponse = { success: true };

      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      await service.verifyWithGoogle({ 
        token: 'test-token', 
        remoteIp: '192.168.1.1' 
      });

      const fetchCall = (global.fetch as any).mock.calls[0];
      const requestBody = fetchCall[1].body;
      
      expect(requestBody).toContain('remoteip=192.168.1.1');
    });

    it('should handle network errors', async () => {
      (global.fetch as any).mockRejectedValue(new Error('Network error'));

      const result = await service.verifyWithGoogle({ token: 'test-token' });
      
      expect(result.success).toBe(false);
      expect(result.error_codes).toContain('network-error');
      expect(result.message).toBe('Network error');
    });

    it('should handle HTTP errors', async () => {
      (global.fetch as any).mockResolvedValue({
        ok: false,
        status: 500
      });

      const result = await service.verifyWithGoogle({ token: 'test-token' });
      
      expect(result.success).toBe(false);
      expect(result.message).toBe('HTTP error! status: 500');
    });
  });

  describe('Security Checks', () => {
    beforeEach(() => {
      const mockResponse = {
        success: true,
        score: 0.8,
        action: 'submit',
        challenge_ts: new Date().toISOString(),
        hostname: 'localhost'
      };

      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });

    it('should pass with valid score', async () => {
      const result = await service.verifyWithSecurityChecks(
        { token: 'valid-token-with-good-score' },
        { minScore: 0.5 }
      );
      
      expect(result.success).toBe(true);
      expect(result.score).toBe(0.8);
    });

    it('should fail with low score', async () => {
      const mockResponse = {
        success: true,
        score: 0.3,
        action: 'submit',
        challenge_ts: new Date().toISOString()
      };

      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const result = await service.verifyWithSecurityChecks(
        { token: 'low-score-token' },
        { minScore: 0.5 }
      );
      
      expect(result.success).toBe(false);
      expect(result.message).toContain('Score too low');
      expect(result.error_codes).toContain('low-score');
    });

    it('should validate expected action', async () => {
      const result = await service.verifyWithSecurityChecks(
        { token: 'valid-token' },
        { expectedAction: 'submit' }
      );
      
      expect(result.success).toBe(true);
    });

    it('should fail with wrong action', async () => {
      const result = await service.verifyWithSecurityChecks(
        { token: 'valid-token' },
        { expectedAction: 'login' }
      );
      
      expect(result.success).toBe(false);
      expect(result.message).toContain('Unexpected action');
      expect(result.error_codes).toContain('wrong-action');
    });

    it('should validate token age', async () => {
      const recentTime = new Date(Date.now() - 60000).toISOString(); // 1 minute ago
      const mockResponse = {
        success: true,
        challenge_ts: recentTime,
        hostname: 'localhost'
      };

      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const result = await service.verifyWithSecurityChecks(
        { token: 'recent-token' },
        { maxAge: 300 } // 5 minutes
      );
      
      expect(result.success).toBe(true);
    });

    it('should fail with expired token', async () => {
      const oldTime = new Date(Date.now() - 600000).toISOString(); // 10 minutes ago
      const mockResponse = {
        success: true,
        challenge_ts: oldTime,
        hostname: 'localhost'
      };

      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const result = await service.verifyWithSecurityChecks(
        { token: 'old-token' },
        { maxAge: 300 } // 5 minutes
      );
      
      expect(result.success).toBe(false);
      expect(result.message).toContain('Token too old');
      expect(result.error_codes).toContain('token-expired');
    });

    it('should fail with invalid token format', async () => {
      const result = await service.verifyWithSecurityChecks(
        { token: 'invalid@token' },
        {}
      );
      
      expect(result.success).toBe(false);
      expect(result.message).toBe('Invalid reCAPTCHA token format');
      expect(result.error_codes).toContain('invalid-token-format');
    });
  });

  describe('Error Message Handling', () => {
    it('should return appropriate error messages for known error codes', async () => {
      const testCases = [
        { code: 'missing-input-secret', expectedMessage: 'The secret parameter is missing' },
        { code: 'invalid-input-secret', expectedMessage: 'The secret parameter is invalid or malformed' },
        { code: 'missing-input-response', expectedMessage: 'The response parameter is missing' },
        { code: 'invalid-input-response', expectedMessage: 'The response parameter is invalid or malformed' },
        { code: 'bad-request', expectedMessage: 'The request is invalid or malformed' },
        { code: 'timeout-or-duplicate', expectedMessage: 'The response is no longer valid: either is too old or has been used previously' }
      ];

      for (const testCase of testCases) {
        const mockResponse = {
          success: false,
          'error-codes': [testCase.code]
        };

        (global.fetch as any).mockResolvedValue({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });

        const result = await service.verifyWithGoogle({ token: 'test-token' });
        expect(result.message).toBe(testCase.expectedMessage);
      }
    });

    it('should handle unknown error codes', async () => {
      const mockResponse = {
        success: false,
        'error-codes': ['unknown-error-code']
      };

      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const result = await service.verifyWithGoogle({ token: 'test-token' });
      expect(result.message).toBe('Verification failed: unknown-error-code');
    });
  });
});
