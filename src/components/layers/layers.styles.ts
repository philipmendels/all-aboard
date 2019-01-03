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
  borderBottom: '1px solid #ddd',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  '$nest': {
    '&:hover': {
      backgroundColor: 'lightgray',
      '.icon': {
        color: 'white',
      },
    },
    '.icon': {
      color: 'lightgray',
      fontSize: '10px',
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