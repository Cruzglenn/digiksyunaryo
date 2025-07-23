/**
 * Integration Tests for Feedback Form with reCAPTCHA
 */

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Feedback from '../pages/Feedback';
import { toast } from 'sonner';

// Mock dependencies
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn()
  }
}));

vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn()
  }
}));

vi.mock('react-google-recaptcha', () => ({
  default: vi.forwardRef((props: any, ref: any) => {
    return (
      <div data-testid="recaptcha-mock">
        <button
          onClick={() => props.onChange && props.onChange('mock-recaptcha-token')}
          data-testid="recaptcha-solve"
        >
          Solve reCAPTCHA
        </button>
        <button
          onClick={() => props.onChange && props.onChange(null)}
          data-testid="recaptcha-expire"
        >
          Expire reCAPTCHA
        </button>
        <button
          onClick={() => props.onError && props.onError(new Error('Mock error'))}
          data-testid="recaptcha-error"
        >
          Trigger Error
        </button>
      </div>
    );
  })
}));

// Mock environment variables
vi.mock('import.meta', () => ({
  env: {
    VITE_RECAPTCHA_SITE_KEY: 'test-site-key'
  }
}));

// Mock fetch for reCAPTCHA verification
global.fetch = vi.fn();

const renderFeedbackForm = () => {
  return render(
    <BrowserRouter>
      <Feedback />
    </BrowserRouter>
  );
};

describe('Feedback Form Integration Tests', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock successful reCAPTCHA verification by default
    (global.fetch as any).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({
        success: true,
        score: 0.9,
        challenge_ts: new Date().toISOString(),
        hostname: 'localhost'
      })
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Form Rendering', () => {
    it('should render all form fields including reCAPTCHA', () => {
      renderFeedbackForm();
      
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/pangalan/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/lebel/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/puna o mungkahi/i)).toBeInTheDocument();
      expect(screen.getByTestId('recaptcha-mock')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /isumite ang feedback/i })).toBeInTheDocument();
    });

    it('should show reCAPTCHA label and required indicator', () => {
      renderFeedbackForm();
      
      expect(screen.getByText(/patunayan na hindi ka robot/i)).toBeInTheDocument();
      expect(screen.getByText(/kailangan mo itong kumpletuhin/i)).toBeInTheDocument();
    });
  });

  describe('Form Validation', () => {
    it('should validate required fields', async () => {
      renderFeedbackForm();
      
      const submitButton = screen.getByRole('button', { name: /isumite ang feedback/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText(/email address ay kinakailangan/i)).toBeInTheDocument();
        expect(screen.getByText(/pangalan ay dapat may hindi bababa sa 2 character/i)).toBeInTheDocument();
        expect(screen.getByText(/kurso o lebel ay kinakailangan/i)).toBeInTheDocument();
        expect(screen.getByText(/puna o mungkahi ay dapat may hindi bababa sa 10 character/i)).toBeInTheDocument();
        expect(screen.getByText(/mangyaring kumpletuhin ang recaptcha verification/i)).toBeInTheDocument();
      });
    });

    it('should validate email format', async () => {
      renderFeedbackForm();
      
      const emailInput = screen.getByLabelText(/email/i);
      await user.type(emailInput, 'invalid-email');
      
      const submitButton = screen.getByRole('button', { name: /isumite ang feedback/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText(/mangyaring maglagay ng wastong email address/i)).toBeInTheDocument();
      });
    });

    it('should validate name format', async () => {
      renderFeedbackForm();
      
      const nameInput = screen.getByLabelText(/pangalan/i);
      await user.type(nameInput, '123@#$');
      
      const submitButton = screen.getByRole('button', { name: /isumite ang feedback/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText(/pangalan ay dapat naglalaman lamang ng mga titik at espasyo/i)).toBeInTheDocument();
      });
    });

    it('should validate minimum message length', async () => {
      renderFeedbackForm();
      
      const messageInput = screen.getByLabelText(/puna o mungkahi/i);
      await user.type(messageInput, 'short');
      
      const submitButton = screen.getByRole('button', { name: /isumite ang feedback/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText(/puna o mungkahi ay dapat may hindi bababa sa 10 character/i)).toBeInTheDocument();
      });
    });
  });

  describe('reCAPTCHA Integration', () => {
    it('should handle reCAPTCHA completion', async () => {
      renderFeedbackForm();
      
      const solveButton = screen.getByTestId('recaptcha-solve');
      await user.click(solveButton);
      
      // The token should be set in the form
      // We can verify this by checking if validation passes for reCAPTCHA
      const submitButton = screen.getByRole('button', { name: /isumite ang feedback/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        // reCAPTCHA validation error should not appear
        expect(screen.queryByText(/mangyaring kumpletuhin ang recaptcha verification/i)).not.toBeInTheDocument();
      });
    });

    it('should handle reCAPTCHA expiration', async () => {
      renderFeedbackForm();
      
      // First solve reCAPTCHA
      const solveButton = screen.getByTestId('recaptcha-solve');
      await user.click(solveButton);
      
      // Then expire it
      const expireButton = screen.getByTestId('recaptcha-expire');
      await user.click(expireButton);
      
      const submitButton = screen.getByRole('button', { name: /isumite ang feedback/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText(/mangyaring kumpletuhin ang recaptcha verification/i)).toBeInTheDocument();
      });
    });

    it('should handle reCAPTCHA errors', async () => {
      renderFeedbackForm();
      
      const errorButton = screen.getByTestId('recaptcha-error');
      await user.click(errorButton);
      
      // Error should clear the token
      const submitButton = screen.getByRole('button', { name: /isumite ang feedback/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText(/mangyaring kumpletuhin ang recaptcha verification/i)).toBeInTheDocument();
      });
    });
  });

  describe('Form Submission', () => {
    const fillValidForm = async () => {
      const emailInput = screen.getByLabelText(/email/i);
      const nameInput = screen.getByLabelText(/pangalan/i);
      const levelInput = screen.getByLabelText(/lebel/i);
      const messageInput = screen.getByLabelText(/puna o mungkahi/i);
      
      await user.type(emailInput, 'test@example.com');
      await user.type(nameInput, 'Juan Dela Cruz');
      await user.type(levelInput, 'Grade 12');
      await user.type(messageInput, 'This is a test feedback message with sufficient length.');
      
      // Solve reCAPTCHA
      const solveButton = screen.getByTestId('recaptcha-solve');
      await user.click(solveButton);
    };

    it('should submit form successfully with valid data and reCAPTCHA', async () => {
      const emailjs = await import('@emailjs/browser');
      (emailjs.default.send as any).mockResolvedValue({ status: 200, text: 'OK' });
      
      renderFeedbackForm();
      await fillValidForm();
      
      const submitButton = screen.getByRole('button', { name: /isumite ang feedback/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(emailjs.default.send).toHaveBeenCalledWith(
          'service_j6d3eln',
          'template_8jdc759',
          expect.objectContaining({
            from_name: 'Juan Dela Cruz',
            from_email: 'test@example.com',
            level: 'Grade 12',
            message: 'This is a test feedback message with sufficient length.',
            recaptcha_verified: 'Yes'
          }),
          'YE_cdwWA94NYVKBSB'
        );
      });
      
      expect(toast.success).toHaveBeenCalledWith(
        'Maraming salamat sa inyong puna o mungkahi!',
        expect.objectContaining({
          description: 'Natanggap na namin ang inyong feedback at ito ay aming susuriin.'
        })
      );
    });

    it('should handle reCAPTCHA verification failure', async () => {
      // Mock failed reCAPTCHA verification
      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({
          success: false,
          'error-codes': ['invalid-input-response']
        })
      });
      
      renderFeedbackForm();
      await fillValidForm();
      
      const submitButton = screen.getByRole('button', { name: /isumite ang feedback/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(toast.error).toHaveBeenCalledWith(
          'reCAPTCHA verification failed',
          expect.objectContaining({
            description: expect.stringContaining('Hindi na-verify ang reCAPTCHA')
          })
        );
      });
    });

    it('should handle low reCAPTCHA score', async () => {
      // Mock low score response
      (global.fetch as any).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({
          success: true,
          score: 0.2,
          challenge_ts: new Date().toISOString(),
          hostname: 'localhost'
        })
      });
      
      renderFeedbackForm();
      await fillValidForm();
      
      const submitButton = screen.getByRole('button', { name: /isumite ang feedback/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(toast.error).toHaveBeenCalledWith(
          'reCAPTCHA verification failed',
          expect.objectContaining({
            description: expect.stringContaining('Score too low')
          })
        );
      });
    });

    it('should handle email sending failure', async () => {
      const emailjs = await import('@emailjs/browser');
      (emailjs.default.send as any).mockRejectedValue(new Error('Email service error'));
      
      renderFeedbackForm();
      await fillValidForm();
      
      const submitButton = screen.getByRole('button', { name: /isumite ang feedback/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(toast.error).toHaveBeenCalledWith(
          'May naganap na error sa pagpapadala ng inyong feedback',
          expect.objectContaining({
            description: 'Pakisubukang muli mamaya o makipag-ugnay sa amin sa ibang paraan.'
          })
        );
      });
    });

    it('should show loading state during submission', async () => {
      const emailjs = await import('@emailjs/browser');
      // Create a promise that we can control
      let resolveEmailSend: (value: any) => void;
      const emailSendPromise = new Promise((resolve) => {
        resolveEmailSend = resolve;
      });
      (emailjs.default.send as any).mockReturnValue(emailSendPromise);
      
      renderFeedbackForm();
      await fillValidForm();
      
      const submitButton = screen.getByRole('button', { name: /isumite ang feedback/i });
      await user.click(submitButton);
      
      // Check loading state
      expect(screen.getByText(/isinusumite/i)).toBeInTheDocument();
      expect(submitButton).toBeDisabled();
      
      // Resolve the email sending
      resolveEmailSend!({ status: 200, text: 'OK' });
      
      await waitFor(() => {
        expect(screen.queryByText(/isinusumite/i)).not.toBeInTheDocument();
        expect(submitButton).not.toBeDisabled();
      });
    });
  });
});
