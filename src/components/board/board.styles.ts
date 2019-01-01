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

const transformToolClass = style({
  position: 'absolute',
  boxSizing: 'border-box',
  pointerEvents: 'none',
  zIndex: 2,
  border: '1px solid #5599DD',
});

const transformToolHandleClass = style({
  pointerEvents: 'auto',
  position: 'absolute',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: '#5599DD'
});

export const boardStyles = {
  rootClass,
  marqueeClass,
  transformToolClass,
  transformToolHandleClass
}
