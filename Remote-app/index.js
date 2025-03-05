import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import RemoteApp from './src/RemoteApp.js';

const container = document.getElementById('remoteApp');
const root = createRoot(container);

root.render(
	<React.Fragment>
		<Provider store={store}>
			<RemoteApp />
		</Provider>
	</React.Fragment>
);
reportWebVitals(console.log);
