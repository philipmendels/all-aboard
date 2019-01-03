import { style } from "typestyle";

const root = style({
  width: '100%',
  height: '100%',
  userSelect: 'none',
  "-moz-user-select": 'none',
})

const layer = style({
  height: '30px',
  padding: '0 10px 0 10px',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  '$nest': {
    '&:hover': {
      backgroundColor: 'lightgray'
    },
    '.text-icon': {
      color: 'gray',
      fontSize: '14px',
      fontWeight: 'lighter',
      marginRight: '10px'
    },
    '.text': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
  }
})

export const layersStyles = {
  root,
  layer
};