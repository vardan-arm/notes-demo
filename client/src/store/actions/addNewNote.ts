import { AppDispatch } from '../index';
import generalSlice from '../general';
import { API_HOST } from '../../configs';
import { batch } from 'react-redux';
import notesSlice from '../notes';

// While this function is very similar copy of `getInitialNotes`, I don't want to "merge" them,
// since one is intended for getting the notes and another one - for adding.
// They are so similar just because of requirements, in real app they will be totally different.
export const addNewNote = (noteNumber: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(generalSlice.actions.setIsLoading(true));

    try {
      const res = await fetch(`${API_HOST}/api/addNote/${noteNumber}`);
      const { data } = await res.json();

      batch(() => {
        dispatch(notesSlice.actions.addNote(data));
        dispatch(generalSlice.actions.setIsSuccess());
      });
    } catch (error) {
      dispatch(generalSlice.actions.setIsFailure(error));
    }
  };
}
