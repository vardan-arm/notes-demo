import { ReactComponent as SortingDirectionIcon } from '../icons/sorting-direction.svg';
import { ReactComponent as AddNoteIcon } from '../icons/add-note.svg';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addNewNote } from '../store/actions/addNewNote';
import { StoreReducer } from '../store';
import { getNoteItems } from '../store/selectors/notes';
import notesSlice from '../store/notes';
import { SortingDirections } from '../enums';

interface IProps {
  notesSortingDirection: SortingDirections;
}

const ButtonContainerStyled = styled.div`
  margin: auto 6px;
  cursor: pointer;
  display: inline-block;
`;



const SortingDirectionsIconContainerStyled = styled.div`
   svg {
    transform: ${(props: IProps) => props.notesSortingDirection === SortingDirections.ASC ? `scaleY(-1)` : `scaleY(1)`}
  }
`;

const ContainerHeaderButtons = ({ notesSortingDirection }: IProps) => {
  const dispatch = useDispatch();
  const notes = useSelector((state: StoreReducer) => getNoteItems(state));

  return (
    <div>
      <ButtonContainerStyled>
        <SortingDirectionsIconContainerStyled notesSortingDirection={notesSortingDirection}>
          <SortingDirectionIcon
            onClick={() => {
              dispatch(notesSlice.actions.sort());
            }} />
        </SortingDirectionsIconContainerStyled>
      </ButtonContainerStyled>
      <ButtonContainerStyled>
        <AddNoteIcon onClick={() => {
          dispatch(addNewNote(notes.length));
        }} />
      </ButtonContainerStyled>
    </div>
  );
};

export default ContainerHeaderButtons;
