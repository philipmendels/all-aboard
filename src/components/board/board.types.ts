import { CardData } from "../../models/card";
import { Vector } from "../../models/geom/vector.model";
import { SelectedItem } from "../../models/selection";
import { Bounds } from "../../models/geom/bounds.model";
import { TransformHandle } from "../transform-tool/transform-handle.model";

export type BoardStateProps = {
  cards: CardData[];
  selectedItems: {
    [id: string]: SelectedItem;
  };
  hoveredCardId?: string;
};

export type BoardDispatchProps = {
  addCard: (location: Vector) => void,
  removeCards: () => void,
  startMoveCards: (location: Vector) => void,
  stopMoveCards: (location: Vector) => void,
  startScaleCards: (transformHandle: TransformHandle) => void,
  stopScaleCards: (location: Vector) => void,
  moveCards: (location: Vector) => void,
  scaleCards: (location: Vector) => void,
  selectCards: (ids: string[]) => void,
  deselectCard: (id: string) => void,
  clearSelection: () => void,
  mouseEnterCard: (id: string) => void,
  mouseLeaveCard: () => void
};

export type BoardProps = BoardDispatchProps & BoardStateProps;

export type BoardComponentState = {
  isDraggingMarquee: boolean,
  marquee: Bounds
};