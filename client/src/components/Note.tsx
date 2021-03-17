import { INote } from '../store/types';
import styled from 'styled-components';
import NoteIcon from './NoteIcon';
import { formatDate } from '../utils/dateUtils';
import Tags from './Tags';
import { NoteTypes } from '../enums';
import { ReactComponent as LockIconStyled} from '../icons/lock.svg';

interface IProps {
  noteData: INote;
}

const NoteContainerStyled = styled.div`
  border-bottom: 1px solid #DFE1E4;


  > * {
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;

    margin-right: 12px;
    margin-left: 16px;
    margin-bottom: 13px;
    
  }
`;

const HeaderStyled = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 11px;
  margin-top: 11px;
`;

const NoteIconContainerStyled = styled.div`
  margin-right: 0;
  margin-left: 10px;


  //text-overflow: ellipsis;
  //overflow-x: hidden;
  //white-space: nowrap;

  position: absolute;

`;

const NoteIconStyled = styled(NoteIcon)`
  margin-right: 0;
  margin-left: 10px;

  position: absolute;

  /*svg {
    position: absolute;
  }*/
`;

const DetailsSectionStyled = styled.div`
  margin-left: 16px;
`;

const TitleStyled = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  margin-left: 10px;

  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;

  /*&:before {
    display: block;
    //content: ' ';
    content: url('../icons/rich-text.svg');
    height: 16px;
    width: 16px;
  }*/
`;

// const IconStyled = styled.svg``;

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

const Note = ({ noteData }: IProps) => {
  const {
    title,
    type,
    body,
    lastChanged,
    tags,
  } = noteData;

  return (
    <NoteContainerStyled>
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
