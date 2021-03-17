import { StoreReducer } from '../index';
import { INote } from '../types';

export const getNotes = (state: StoreReducer) => state.notes.items;
