import { createSlice } from '@reduxjs/toolkit';
import { SortingDirections } from '../../enums';

const initialState = {
  items: [],
  sortingDirection: SortingDirections.ASC
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNotes: (state, { payload }) => ({
      ...state,
      items: payload
    }),

    // @ts-ignore  // TODO: fix TS issue and remove `ts-ignore`
    addNote: (state, { payload }) => ({
      ...state,
      items: [
        ...state.items,
        payload
      ],
    })
  }
});

export default notesSlice;
