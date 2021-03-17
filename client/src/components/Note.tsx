import { INote } from '../store/types';
import styled from 'styled-components';
import NoteIcon from './NoteIcon';
import { formatDate } from '../utils/dateUtils';
import Tags from './Tags';
import { NoteTypes } from '../enums';
import { ReactComponent as LockIconStyled } from '../icons/lock.svg';
import { useDispatch } from 'react-redux';
import notesSlice from '../store/notes';

interface IProps {
  noteData: INote;
  isSelected: boolean;
}

const NoteContainerStyled = styled.div`
  border-bottom: 1px solid #DFE1E4;

  &:hover {
    background: #F4F5F7;
  }

  > * {
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;

    margin-right: 12px;
    margin-left: 16px;
    margin-bottom: 13px;

  }

  background: ${(p: IProps) => p.isSelected ? '#F4F5F7' : 'white'};
`;

const HeaderStyled = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 11px;
  margin-top: 11px;
`;



const NoteIconStyled = styled(NoteIcon)`
  margin-right: 0;
  margin-left: 10px;

  position: absolute;
`;


const TitleStyled = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  margin-left: 10px;

  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;

`;

const BodyStyled = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
`;

const DateStyled = styled.div`
  color: #515357;
  font-size: 10px;
  line-height: 14px;
  font-weight: 400;
`;

const Note = ({ noteData, isSelected = false }: IProps) => {
  const {
    id,
    title,
    type,
    body,
    lastChanged,
    tags,
  } = noteData;

  const dispatch = useDispatch();

  return (
    <NoteContainerStyled
      isSelected={isSelected}
      onClick={(e) => {
        // TODO (Vardan) don't do for already selected item
        if (e.metaKey || e.ctrlKey) {
          dispatch(notesSlice.actions.updateSelection(id));
        }
      }}
      noteData={noteData}
    >
      <HeaderStyled>
        <NoteIconStyled type={type} />
        <TitleStyled title={title}>{title}</TitleStyled>
        {type === NoteTypes.TOKEN_VAULT && <LockIconStyled />}
      </HeaderStyled>
      <BodyStyled title={body}>{body}</BodyStyled>
      <DateStyled>{formatDate(lastChanged)}</DateStyled>
      <Tags tags={tags} />
    </NoteContainerStyled>
  );
};

export default Note;
