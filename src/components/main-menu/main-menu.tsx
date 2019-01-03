import * as React from 'react';
import { mainMenuStyles } from './main-menu.styles';
import { MainMenuProps } from './main-menu.types';

export const MainMenu:React.SFC<MainMenuProps> = ({canUndo, canRedo, redo, undo}) => (
  <div className={mainMenuStyles.root}>
    <button disabled={!canUndo} onClick={undo}>undo</button>
    <button disabled={!canRedo} onClick={redo}>redo</button>
  </div>
);