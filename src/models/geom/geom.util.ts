import { Bounds } from './bounds.model';
import { IShape } from './shape.interface';
import { Vector } from './vector.model';
const TWO_PI: number = 2 * Math.PI;
const HALF_PI: number = 0.5 * Math.PI;

export const equals = (num: number, num2: number): boolean => {
  return Math.abs(num - num2) < Number.EPSILON;
}
export const normalizeRad = (rad: number) => {
  return rad - TWO_PI * Math.floor((rad + Math.PI) / TWO_PI);
}
export const normalizeDeg = (deg: number) => {
  return deg - 360 * Math.floor((deg + 180) / 360);
}
export const degRadFactor = Math.PI / 180;
export const degToRad = (deg: number): number => {
  return deg * degRadFactor;
}
export const radDegFactor = 180 / Math.PI;
export const radToDeg = (rad: number): number => {
  return rad * radDegFactor;
}
export const angleDegToVector = (deg: number, fixError: boolean = true): Vector => {
  if (fixError) {
    deg = normalizeDeg(deg);
    if (equals(Math.abs(deg), 90)) {
      return new Vector(0, Math.sign(deg));
    } else if (equals(deg, 180)) {
      return new Vector(-1, 0);
    }
  }
  const rad = degToRad(deg);
  return angleRadToVector(rad, false);
}
export const angleRadToVector = (rad: number, fixError: boolean = true): Vector => {
  if (fixError) {
    rad = normalizeRad(rad);
    if (equals(Math.abs(rad), HALF_PI)) {
      return new Vector(0, Math.sign(rad));
    } else if (equals(rad, Math.PI)) {
      return new Vector(-1, 0);
    }
  }
  return new Vector(Math.cos(rad), Math.sin(rad));
}
export const angleDegToSlope = (deg: number, fixError: boolean = true) => {
  if (fixError) {
    deg = normalizeDeg(deg);
    if (equals(Math.abs(deg), 90)) {
      return Math.sign(deg) * Infinity;
    } else if (equals(deg, 180)) {
      // TODO: is signed zero safe to use? Or better keep a very small number?
      return -0;
    }
  }
  const rad = degToRad(deg);
  return angleRadToSlope(rad, false);
}
export const angleRadToSlope = (rad: number, fixError: boolean = true): number => {
  if (fixError) {
    rad = normalizeRad(rad);
    if (equals(Math.abs(rad), HALF_PI)) {
      return Math.sign(rad) * Infinity;
    } else if (equals(rad, Math.PI)) {
      // TODO: is signed zero safe to use? Or better keep a very small number?
      return -0;
    }
  }
  return Math.tan(rad);
}
export const isVerticalSlope = (slope: number): boolean => {
  return slope === undefined || slope === Infinity || slope === -Infinity;
}
export const isHorizontalSlope = (slope: number): boolean => {
  return equals(slope, 0);
}
export const slopeToVector = (slope: number): Vector => {
  if (slope === undefined || slope === Infinity) {
    return new Vector(0, 1);
  } else if (slope === -Infinity) {
    return new Vector(0, -1);
  }
  return new Vector(1, 1 * slope).normalize();
}
export const slopeToAngleRad = (slope: number): number => {
  if (slope === undefined) {
    slope = Infinity;
  }
  return Math.tan(slope);
}
export const slopeToAngleDeg = (slope: number): number => {
  return radToDeg(slopeToAngleRad(slope));
}
export const getBounds = (shapes: IShape[]): Bounds => {
  if (!shapes || !shapes.length) {
    return new Bounds(0, 0, 0, 0);
  }
  const minLeft = arrayMin(shapes.map(shape => shape.left()));
  const minTop = arrayMin(shapes.map(shape => shape.top()));
  const maxRight = arrayMax(shapes.map(shape => shape.right()));
  const maxBottom = arrayMax(shapes.map(shape => shape.bottom()));
  return new Bounds(minLeft, minTop, maxRight, maxBottom);
}
export const arrayMin = (array: number[]): number => {
  return Math.min(...array);
}
export const arrayMax = (array: number[]): number => {
  return Math.max(...array);
}