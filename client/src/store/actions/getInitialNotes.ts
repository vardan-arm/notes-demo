import { batch } from 'react-redux';
import generalSlice from '../general';
import { API_HOST } from '../../configs';
import notesSlice from '../notes';
import { AppDispatch } from '../index';

export const getInitialNotes = () => async (dispatch: AppDispatch) => {
  dispatch(generalSlice.actions.setIsLoading(true));

  try {
    const res = await fetch(`${API_HOST}/api/getInitialNotes`);
    const { data } = await res.json();

    batch(() => {
      dispatch(notesSlice.actions.setNotes(data));
      dispatch(generalSlice.actions.setIsSuccess());
    });
  } catch (error) {
    dispatch(generalSlice.actions.setIsFailure(error));
  }
};
