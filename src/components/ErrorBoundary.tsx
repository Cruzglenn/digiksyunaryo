import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * ErrorBoundary component for handling application errors gracefully
 * Provides a user-friendly error message and recovery options
 */
class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to an error reporting service
    console.error('App error:', error, errorInfo);
    this.setState({ errorInfo });

    // You could add additional error logging here:
    // logErrorToService(error, errorInfo);
  }

  handleReload = (): void => {
    window.location.reload();
  };

  handleGoHome = (): void => {
    window.location.href = '/';
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-dictionary-100/30">
          <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-maroon/10 flex items-center justify-center mb-4">
                <AlertTriangle className="h-10 w-10 text-maroon" />
              </div>
              
              <h2 className="text-2xl font-serif font-bold text-dictionary-dark mb-3">
                May Problema sa App
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Paumanhin, nagkaroon ng hindi inaasahang problema ang application. 
                Maaari mong subukang i-refresh ang page o bumalik sa home page.
              </p>
              
              {this.state.error && (
                <div className="bg-maroon/5 p-3 rounded-md w-full mb-4 text-left overflow-auto max-h-40 text-sm">
                  <p className="font-medium">Error: {this.state.error.toString()}</p>
                  {this.state.errorInfo && (
                    <pre className="mt-2 text-xs text-muted-foreground">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              )}
              
              <div className="flex space-x-3">
                <Button
                  onClick={this.handleReload}
                  variant="outline"
                  className="flex items-center"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  I-refresh
                </Button>
                
                <Button 
                  onClick={this.handleGoHome}
                  className="bg-maroon hover:bg-burgundy"
                >
                  Bumalik sa Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
