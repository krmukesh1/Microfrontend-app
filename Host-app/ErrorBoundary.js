import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
		padding: 20,
	},
	errorText: {
		color: 'red',
		marginBottom: 10,
	},
	errorDetails: {
		color: 'gray',
		fontSize: 12,
	},
};
class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null, errorInfo: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		console.error('Error caught by ErrorBoundary:', error, errorInfo);
		this.setState({ errorInfo });
	}

	handleReload = () => {
		this.setState({ hasError: false, error: null, errorInfo: null });
	};

	render() {
		if (this.state.hasError) {
			return (
				<div style={styles.container}>
					<h2 style={styles.errorText}>
						Failed to load mini app. Please try again later.
					</h2>
					<p style={styles.errorDetails}>{this.state.error?.toString()}</p>
				</div>
			);
		}

		return this.props.children;
	}
}
ErrorBoundary.propTypes = {
	children: PropTypes.node,
};

export default ErrorBoundary;
