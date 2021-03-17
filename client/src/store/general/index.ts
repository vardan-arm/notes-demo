import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  hasErrors: false,
  errorMessage: '',
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),
    setIsSuccess: state => ({
      ...state,
      isLoading: false,
      hasErrors: false,
      errorMessage: '',
    }),
    setIsFailure: (state, { payload }) => ({
      ...state,
      isLoading: false,
      hasErrors: true,
      errorMessage: payload,
    }),
  },
});

export default generalSlice;
