import { useSelector } from 'react-redux';
import { getNoteItems, getSelectedNoteItemIds } from '../store/selectors/notes';
import { StoreReducer } from '../store';
import Note from './Note';
import { INote } from '../store/types';
import Tooltip from './Tooltip';




const ContainerBody = () => {
  const notes = useSelector((state: StoreReducer) => getNoteItems(state));
  const selectedNotes = useSelector((state: StoreReducer) => getSelectedNoteItemIds(state));

  return (
    <div data-tip
         data-for="selectionsCount">
      <Tooltip id={'selectionsCount'} effect={'solid'} selectionCount={selectedNotes.length} />

      {notes.map((note: INote) => {
        return <Note key={note.id} noteData={note} isSelected={selectedNotes.includes(note.id)} />;
      })}
    </div>);
};

export default ContainerBody;
