import { SortingDirections } from '../enums';
import { INote } from '../store/types';

export const sortArray = (items: INote[], direction: SortingDirections, sortBy = 'lastChanged') => {
  const sorted = items.sort((a, b) => {
    return direction === SortingDirections.ASC ? a.lastChanged - b.lastChanged : b.lastChanged - a.lastChanged;
  });

  return sorted;
};
