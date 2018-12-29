// import { Vector } from './vector.model';
// import * as GeomUtil from './geom.util';

export enum Orientation {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
  DIAGONAL = 'DIAGONAL',
  ALL = 'ALL'
}

export enum Direction {
  TOP = 'TOP',
  TOPRIGHT = 'TOPRIGHT',
  RIGHT = 'RIGHT',
  BOTTOMRIGHT = 'BOTTOMRIGHT',
  BOTTOM = 'BOTTOM',
  BOTTOMLEFT = 'BOTTOMLEFT',
  LEFT = 'LEFT',
  TOPLEFT = 'TOPLEFT',
  ALL = 'ALL'
};

// export enum DirectionCompass {
//   N = 'N', NE = 'NE', E = 'E', SE = 'SE', S = 'S', SW = 'SW', W = 'W', NW = 'NW', ALL = 'ALL'
// }

// export class DirectionMapItem {
//   public readonly vector: Vector;
//   public readonly vectorRounded: Vector;
//   public readonly angleRad: number;
//   constructor(
//     readonly direction: Direction,
//     readonly directionCompass: DirectionCompass,
//     readonly orientation: Orientation,
//     readonly angleDeg: number
//   ) {
//     this.vector = GeomUtil.angleDegToVector(angleDeg);
//     this.vectorRounded = this.vector.round();
//     this.angleRad = GeomUtil.degToRad(angleDeg);
//   }
// }

// export const DirectionMap: DirectionMapItem[] = [
//   new DirectionMapItem(Direction.TOP, DirectionCompass.N, Orientation.VERTICAL, -90),
//   new DirectionMapItem(Direction.TOPRIGHT, DirectionCompass.NE, Orientation.DIAGONAL, -45),
//   new DirectionMapItem(Direction.RIGHT, DirectionCompass.E, Orientation.HORIZONTAL, 0),
//   new DirectionMapItem(Direction.BOTTOMRIGHT, DirectionCompass.SE, Orientation.DIAGONAL, 45),
//   new DirectionMapItem(Direction.BOTTOM, DirectionCompass.S, Orientation.VERTICAL, 90),
//   new DirectionMapItem(Direction.BOTTOMLEFT, DirectionCompass.SW, Orientation.DIAGONAL, 135),
//   new DirectionMapItem(Direction.LEFT, DirectionCompass.W, Orientation.HORIZONTAL, 180),
//   new DirectionMapItem(Direction.TOPLEFT, DirectionCompass.NW, Orientation.DIAGONAL, -135),
// ]

