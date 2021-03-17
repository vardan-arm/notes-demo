import { useSelector } from 'react-redux';
import { getNoteItems, getSelectedNoteItemIds } from '../store/selectors/notes';
import { StoreReducer } from '../store';
import Note from './Note';
import { INote } from '../store/types';

const ContainerBody = () => {
  const notes = useSelector((state: StoreReducer) => getNoteItems(state));
  const selectedNotes = useSelector((state: StoreReducer) => getSelectedNoteItemIds(state));

  return (
    <>
      {notes.map((note: INote) => {
        return <Note key={note.id} noteData={note} isSelected={selectedNotes.includes(note.id)} />;
      })}
    </>);
};

export default ContainerBody;
