import { createSlice } from '@reduxjs/toolkit';
import { SortingDirections } from '../../enums';

const initialState = {
  notes: [],
  sortingDirection: SortingDirections.ASC
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNotes: (state, { payload }) => ({
      ...state,
      notes: payload
    }),
    addNote: (state, { payload }) => ({
      ...state,
      nodes: [
        ...state.notes,
        payload
      ]
    })
  }
});

export default notesSlice;
