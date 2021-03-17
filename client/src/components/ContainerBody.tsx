import { useSelector } from 'react-redux';
import { getNotes } from '../store/selectors/notes';
import { StoreReducer } from '../store';
import Note from './Note';
import { INote } from '../store/types';

const ContainerBody = () => {
  const notes = useSelector((state: StoreReducer) => getNotes(state));

  return (
    <>
      {notes.map((note: INote) => {
        return <Note key={note.id} noteData={note} />
      })}
    </>);
};

export default ContainerBody;
