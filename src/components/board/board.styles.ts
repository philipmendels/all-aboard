import { style } from "typestyle";
import { Colors } from "../../styles/styles";

const rootClass = style({
  backgroundColor: 'white',
  position: 'relative',
  width: '100vw',
  height: '100vh',
  outline: 'none',
  overflow: 'hidden',
});

const marqueeClass = style({
  backgroundColor: 'transparent',
  border: '1px dashed black',
  position: 'absolute',
  pointerEvents: 'none',
});

const transformToolClass = style({
  position: 'absolute',
  boxSizing: 'border-box',
  pointerEvents: 'none',
  zIndex: 2,
  border: `1px solid ${Colors.HIGHLIGHT}`,
});

const transformToolHandleClass = style({
  pointerEvents: 'auto',
  position: 'absolute',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: Colors.HIGHLIGHT
});

export const boardStyles = {
  rootClass,
  marqueeClass,
  transformToolClass,
  transformToolHandleClass
}
