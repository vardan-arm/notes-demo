import { createSlice } from '@reduxjs/toolkit';
import { SortingDirections } from '../../enums';
import { sortArray } from '../../utils/dataManipulation';
import { INote } from '../types';

interface IState {
  items: INote[];
  // selectedItems: string[],
  selectedItemIds: string[];
  sortingDirection: SortingDirections;
}

const initialState: IState = {
  items: [],
  // selectedItems: [],
  selectedItemIds: [],
  sortingDirection: SortingDirections.DESC,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNotes: (state, { payload }) => ({
      ...state,
      items: payload,
    }),

    addNote: (state, { payload }) => ({
      ...state,
      items: [
        ...state.items,
        payload,
      ],
    }),
    sort: state => {
      const sortingDirection = state.sortingDirection === SortingDirections.ASC ? SortingDirections.DESC : SortingDirections.ASC;
      const sortedItems: INote[] = sortArray([...state.items], sortingDirection);

      return {
        ...state,
        items: sortedItems,
        sortingDirection,
      };
    },
    updateSelection: (state, { payload }) => {
      const { selectedItemIds } = state;
      // const selectedItemIds = payload.shouldDeselect ? state.selectedItemIds.filter(itemId => itemId === payload.id)
      const updatedSelectedItemIds = selectedItemIds.includes(payload) ? selectedItemIds.filter(itemId => itemId !== payload)
        : [...selectedItemIds, payload];
      /* return {
        ...state,
        selectedItems: [
          ...state.selectedItemIds,
          payload
        ]
      } */
      return {
        ...state,
        selectedItemIds: updatedSelectedItemIds,
      };
    },
  },
});

export default notesSlice;
