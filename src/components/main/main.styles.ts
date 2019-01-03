import { style } from "typestyle";

const root = style({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
});

const sidePanel = style({
  flex: '0 0 200px',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f6f6f6',
  borderRight: '1px solid lightgray',
  fontSize: '12px',
  color: '#2c2c2c',
});

const mainMenu = style({
  flex: '0 0 auto',
  position: 'relative',
  padding: '10px',
  borderBottom: '1px solid lightgray',
});

const layers = style({
  flex: 1,
  position: 'relative',
});

const board = style({
  flex: 1,
  position: 'relative',
});

export const mainStyles = {
  root,
  sidePanel,
  mainMenu,
  layers,
  board,
}