import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        errorMsg: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMsg: error});
    }

    render () {
        if (this.state.hasError) {
            return <h1>{this.state.errorMsg.message}</h1>
        } else {
            // this.props.children is whatever is wrapped inside ErrorBoundary
            return this.props.children;
        }
    }
}

export default ErrorBoundary;