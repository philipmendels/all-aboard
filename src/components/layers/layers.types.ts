import { CardData } from "../../models/card";
import { SelectedItem } from "../../models/selection";

export type LayersDispatchProps = {
  reorderCard: (id: string, toIndex: number) => void;
};

export type LayersStateProps = {
  cards: CardData[];
  selectedItems: {
    [id: string]: SelectedItem;
  };
};

export type LayersProps = LayersDispatchProps & LayersStateProps;