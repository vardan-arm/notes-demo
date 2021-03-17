import styled from 'styled-components';

interface IProps {
  tags?: string;
}

const TagStyled = styled.span`
  background: rgba(187, 190, 196, 0.24);
  border-radius: 2px;
  padding: 1px 4px;
  font-size: 10px;
  line-height: 14px;
  font-weight: 400;
  margin: 0px 8px 0px 0px;
`;

const Tags = ({ tags }: IProps) => {
  if (!tags) {
    return null;
  }

  const tagsArray = tags.split('|');
  const titleTags = tags.split('|').join(', ');

  return (
    <div title={titleTags}>
      {tagsArray.map(tag => (
        <TagStyled key={tag}>
          #
          {tag}
        </TagStyled>
      ))}
    </div>
  );
};

export default Tags;
