import { style } from "typestyle";

const rootClass = style({
  backgroundColor: 'white',
  position: 'relative',
  width: '100vw',
  height: '100vh',
  outline: 'none'
});

const marqueeClass = style({
  backgroundColor: 'transparent',
  border: '1px dashed black',
  position: 'absolute'
});

export const boardStyles = {
  rootClass,
  marqueeClass,
}
