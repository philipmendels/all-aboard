import { CardData } from "../../models/card";

export type CardComponentProps = CardData & {
  isSelected: boolean,
  isDragged: boolean,
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void
}