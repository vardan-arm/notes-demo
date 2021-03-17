import { ReactComponent as SortingDirectionIcon } from '../icons/sorting-direction.svg';
import { ReactComponent as AddNoteIcon } from '../icons/add-note.svg';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addNewNote } from '../store/actions/addNewNote';
import { StoreReducer } from '../store';
import { getNoteItems, getNotes, getNotesSortingDirection } from '../store/selectors/notes';
import notesSlice from '../store/notes';
import { SortingDirections } from '../enums';

const ButtonContainerStyled = styled.div`
  margin: auto 6px;
  cursor: pointer;
  display: inline-block;
`;

/*const SortingDirectionsIconStyled = styled(SortingDirectionIcon)`
  ${props => props.notesSortingDirection === SortingDirections.ASC && css`
    transform: scaleY(-1);
  `}
`;*/

/*
const SortingDirectionsIconStyled = styled(SortingDirectionIcon)`
  ${props => props.notesSortingDirection === SortingDirections.ASC ? `transform: scaleY(-1)` : `transform: scaleY(1)`}
`;

interface IProps {
  notesSortingDirection: SortingDirections;
}
*/

// const ContainerHeaderButtons = ({ notesSortingDirection }: IProps) => {
const ContainerHeaderButtons = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: StoreReducer) => getNoteItems(state));
  // const notesSortingDirection = useSelector((state: StoreReducer) => getNotesSortingDirection);

  return (
    <div>
      <ButtonContainerStyled>
        <SortingDirectionIcon
          onClick={() => {
            // @ts-ignore // TODO: TS complains here, but the code is changed (maybe something is cached in IDE itself, check it)
            dispatch(notesSlice.actions.sort());
          }} />
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
