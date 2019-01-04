import { CardData } from "../models/card";

export const isSelectionKeyDown = (event: React.MouseEvent<any>) => {
  if (event.shiftKey || event.metaKey || event.ctrlKey) {
    return true;
  }
  return false;
}

export const handleSelection = (
  e: React.MouseEvent,
  card: CardData,
  isSelected: boolean,
  clearSelection: () => void,
  select: () => void,
  deselect: () => void
) => {
  if (isSelectionKeyDown(e)) {
    if (!isSelected) {
      select();
    } else {
      deselect();
    }
  } else {
    if (!isSelected) {
      clearSelection();
      select();
    }
  }
};