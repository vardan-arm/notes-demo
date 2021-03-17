import { StoreReducer } from '../index';
import { createSelector } from '@reduxjs/toolkit';

export const getNotes = (state: StoreReducer) => state.notes;

export const getNoteItems = createSelector(getNotes, notes => notes.items);
export const getSelectedNoteItemIds = createSelector(getNotes, notes => notes.selectedItemIds);
export const getNotesSortingDirection = createSelector(getNotes, notes => notes.sortingDirection);
