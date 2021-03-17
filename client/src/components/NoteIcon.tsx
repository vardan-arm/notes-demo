import { ReactComponent as PlainTextIcon } from '../icons/plain-text.svg';
import { ReactComponent as RichTextIcon } from '../icons/rich-text.svg';
import { ReactComponent as CodeIcon } from '../icons/code.svg';
import { ReactComponent as SpreadsheetIcon } from '../icons/spreadsheet.svg';
import { ReactComponent as TokenVaultIcon } from '../icons/token-vault.svg';
import { NoteTypes } from '../enums';

interface IProps {
  type: NoteTypes;
}

const typeIconMapping = {
  [NoteTypes.PLAIN]: PlainTextIcon,
  [NoteTypes.RICH]: RichTextIcon,
  [NoteTypes.CODE]: CodeIcon,
  [NoteTypes.SHEET]: SpreadsheetIcon,
  [NoteTypes.TOKEN_VAULT]: TokenVaultIcon
};

const NoteIcon = ({type}: IProps) => {
  const DynamicIconComponent = typeIconMapping[type]
  return <DynamicIconComponent />;
}

export default NoteIcon;
