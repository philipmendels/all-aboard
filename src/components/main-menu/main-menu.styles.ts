import { style } from "typestyle";

const root = style({
  $nest: {
    button: {
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