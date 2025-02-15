import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App.js';
import reportWebVitals from './reportWebVitals.js';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.Fragment>
		<Provider store={store}>
			<App />
		</Provider>
	</React.Fragment>
);
reportWebVitals(console.log);
