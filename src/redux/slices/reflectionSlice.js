import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    reflections: [],
};

const reflectionSlice = createSlice({
    name: 'reflection',
    initialState,
    reducers: {
        addReflection: (state, action) => {
            state.reflections.push({
                id: Date.now(),
                ...action.payload,
            });
        },
        deleteReflection: (state, action) => {
            state.reflections = state.reflections.filter(ref => ref.id !== action.payload);
        },
    },
});

export const { addReflection, deleteReflection } = reflectionSlice.actions;
export default reflectionSlice.reducer;
