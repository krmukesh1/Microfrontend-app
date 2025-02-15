import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isVisible: true,
};

const contentValidationSlice = createSlice({
	name: 'contentValidation',
	initialState,
	reducers: {
		toggleVisibility: (state) => {
			state.isVisible = !state.isVisible;
		},
	},
});

export const { toggleVisibility } = contentValidationSlice.actions;

export default contentValidationSlice.reducer;
