import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

interface IProps {
  id: string;
  selectionCount: number;
  effect?: string;
}

const ReactTooltipStyled = styled(ReactTooltip)`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12), 0px 2px 8px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  padding: 8px 0px;
`;

const Tooltip = ({ id, selectionCount = 0 }: IProps) => {
  const text = `${selectionCount} item${selectionCount > 1 ? 's' : ''} selected`;

  return (
    <ReactTooltipStyled
      id={id}
      effect="solid"
      place="left"
      backgroundColor="#ffffff"
      borderColor="black"
      textColor="#19191C"
    >
      <span>{text}</span>
    </ReactTooltipStyled>
  );
};

export default Tooltip;
