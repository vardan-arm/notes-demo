import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styled from 'styled-components';
import { getInitialNotes } from '../store/actions/getInitialNotes';
import ContainerHeader from './ContainerHeader';
import ContainerBody from './ContainerBody';

const ContainerStyled = styled.div`
  width: 13%;
  border: 1px solid #DFE1E4;
  margin: 24px auto 0;
  color: #19191C;
`;

const NotesContainer = () => {
  const dispatch = useDispatch();

  // Get some notes at the beginning
  useEffect(() => {
    dispatch(getInitialNotes());
  }, [dispatch]);

  return (
    <ContainerStyled>
      <ContainerHeader />
      <ContainerBody />
    </ContainerStyled>
  );
};

export default NotesContainer;
