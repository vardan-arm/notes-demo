import { NoteTypes } from '../enums';

export interface INote {
  id: string;
  title: string;
  type: NoteTypes;
  body: string;
  lastChanged: number;
  tags?: string;
}
