import React, { Suspense } from 'react';
import APIcall from './pages/APIcall';
import Counter from './components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { toggleVisibility } from '../services/contentValidationSlice';

const RemoteApp = React.lazy(() => import('RemoteApp/App'));
const App = () => {
	const dispatch = useDispatch();
	const isVisible = useSelector((state) => state.isVisible.isVisible);
	const handleToggle = React.useCallback(() => {
		dispatch(toggleVisibility());
	}, []);

	return (
		<div>
			{isVisible && <h1>Host app</h1>}
			<button onClick={handleToggle}>Toggle Button</button>
			<APIcall />
			<Counter />
			<Suspense fallback={<div>Loading...</div>}>
				<RemoteApp />
			</Suspense>
		</div>
	);
};

export default App;
