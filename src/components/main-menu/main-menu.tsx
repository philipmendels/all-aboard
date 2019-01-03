import * as React from 'react';
import { mainMenuStyles } from './main-menu.styles';
import { MainMenuProps } from './main-menu.types';

export const MainMenu:React.SFC<MainMenuProps> = ({redo, undo}) => (
  <div className={mainMenuStyles.root}>
    <button onClick={undo}>undo</button>
    <button onClick={redo}>redo</button>
  </div>
);