import { CardData } from "../../models/card";
import { SelectedItem } from "../../models/selection";

export type LayersDispatchProps = {
  reorderCard: (id: string, toIndex: number) => void;
  mouseEnterCard: (id: string) => void;
  mouseLeaveCard: () => void;
  selectCards: (ids: string[]) => void;
  deselectCard: (id: string) => void;
  clearSelection: () => void;
};

export type LayersStateProps = {
  cards: CardData[];
  selectedItems: {
    [id: string]: SelectedItem;
  };
  hoveredCardId: string | undefined;
};

export type LayersProps = LayersDispatchProps & LayersStateProps;