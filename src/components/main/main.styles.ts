import { style } from "typestyle";

const root = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'stretch'
});
const layers = style({
  flex: '0 0 200px',
  position: 'relative',
});
const board = style({
  flex: 1,
  position: 'relative',
});
export const mainStyles = {
  root,
  layers,
  board
}