import React from 'react';
import APIcall from './pages/APIcall';
import Counter from './components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { toggleVisibility } from '../services/contentValidationSlice';
const App = () => {
	const dispatch = useDispatch();
	const isVisible = useSelector((state) => state.isVisible.isVisible);
	const handleToggle = React.useCallback(() => {
		dispatch(toggleVisibility());
	}, []);

	return (
		<div>
			{isVisible && <h1>Remote app</h1>}
			<button onClick={handleToggle}>Toggle Button</button>
			<APIcall />
			<Counter />
		</div>
	);
};

export default App;
