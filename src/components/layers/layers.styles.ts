import { style } from "typestyle";
import { Colors } from "../../styles/styles";

const root = style({
  width: '100%',
  height: '100%',
  userSelect: 'none',
  "-moz-user-select": 'none',
})

const layer = style({
  height: '30px',
  minWidth: 0,
  padding: '0 10px 0 10px',
  border: '1px solid transparent',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  '$nest': {
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