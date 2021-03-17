import { ReactComponent as SortingDirectionIcon } from '../icons/sorting-direction.svg';
import { ReactComponent as AddNoteIcon } from '../icons/add-note.svg';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addNewNote } from '../store/actions/addNewNote';
import { StoreReducer } from '../store';
import { getNotes } from '../store/selectors/notes';

const ButtonContainerStyled = styled.div`
  margin: auto 6px;
  cursor: pointer;
  display: inline-block;
`;

const ContainerHeaderButtons = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: StoreReducer) => getNotes(state));

  return (
    <div>
      <ButtonContainerStyled>
        <SortingDirectionIcon />
      </ButtonContainerStyled>
      <ButtonContainerStyled onClick={() => {
        dispatch(addNewNote(notes.length));
      }}>
        <AddNoteIcon />
      </ButtonContainerStyled>
    </div>
  );
};

export default ContainerHeaderButtons;
