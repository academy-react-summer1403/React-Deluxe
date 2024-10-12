// src/components/ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    // You can also log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <h1 className="text-3xl font-bold text-red-500">
              Something went wrong
            </h1>
            <p className="mt-4 text-gray-700">
              We encountered an unexpected error.
            </p>
            <pre className="mt-4 bg-gray-200 p-4 rounded text-left text-sm text-gray-800 overflow-auto">
              {this.state.error && this.state.error.toString()}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
