import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';
import generalSlice from './general';
import notesSlice from './notes';

const store = configureStore({
  reducer: {
    general: generalSlice.reducer,
    notes: notesSlice.reducer
  },
  middleware: [...getDefaultMiddleware(), reduxThunk],
  devTools: true
});

export type AppDispatch = typeof store.dispatch;

export default store;
