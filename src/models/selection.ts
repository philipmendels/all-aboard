import { Vector } from "./geom/vector.model";

export type SelectionState = {
  // action: {} | ScaleActionState,
  items: SelectedItemsState
}

// export type ScaleActionState = {
//   scaleStartBounds: Bounds,
//   scaleTransformHandle: TransformHandle
// }

export type SelectedItemsState = {
  [id: string]: SelectedItem
}

export type SelectedItem = {} | MoveActionItemState
//| ScaleActionItemState;;

export type MoveActionItemState = {
  startMoveMouseOffset: Vector
}

// export type ScaleActionItemState = {
//   startScaleBoundsOffset: Vector,
//   startScaleDimensions: Vector
// }


export const initialSelectionState = {
  action: {},
  items: {}
}