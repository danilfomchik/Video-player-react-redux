import { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        error: { message: "", stack: "" },
        info: { componentStack: "" },
    };

    static getDerivedStateFromError = (error) => {
        return { hasError: true };
    };

    componentDidCatch = (error, info) => {
        this.setState({ error, info });
    };

    render() {
        const { hasError, error, info } = this.state;
        const { children, fallback } = this.props;

        return hasError ? fallback : children;
    }
}

export default ErrorBoundary;
