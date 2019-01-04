import { CardData } from "../../models/card";

export type CardComponentProps = CardData & {
  isSelected: boolean,
  isDragged: boolean,
  isHovered: boolean,
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void,
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void,
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void,
};