import ContainerHeaderButtons from './ContainerHeaderButtons';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { StoreReducer } from '../store';
import { getNotesSortingDirection } from '../store/selectors/notes';

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-around;
  justify-content: center;
  height: 53px;
  border-bottom: 1px solid #DFE1E4;
`;

const InnerContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 12px;
  margin-left: 12px;
`;

const TitleStyled = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;

const ContainerHeader = () => {
  const notesSortingDirection = useSelector((state: StoreReducer) => getNotesSortingDirection(state));

  return (
    <ContainerStyled>
      <InnerContainerStyled>
        <TitleStyled>Notes</TitleStyled>
        <ContainerHeaderButtons notesSortingDirection={notesSortingDirection} />
        {/*<ContainerHeaderButtons />*/}
      </InnerContainerStyled>
    </ContainerStyled>
  );
};

export default ContainerHeader;
