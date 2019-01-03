import { style } from "typestyle";

const root = style({
  $nest: {
    button: {
      border: '1px solid lightgray',
      background: 'white',
      borderRadius: '2px',
      padding: '4px 6px',
      cursor: 'pointer',
      marginRight: '6px',
      $nest: {
        '&[disabled]': {
          opacity: 0.5,
          cursor: 'not-allowed'
        }
      }
    }
  }
});

export const mainMenuStyles = {
  root
}