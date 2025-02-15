import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App.js';
import reportWebVitals from './reportWebVitals.js';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

const bootstrap = () => {
	let root = window._root;
	if (!root) {
		const container = document.getElementById('root');
		root = createRoot(container);
		window._root = root;
	}
	root.render(
		<React.Fragment>
			<Provider store={store}>
				<App />
			</Provider>
		</React.Fragment>
	);
};
bootstrap();
export default bootstrap;
reportWebVitals(console.log);
