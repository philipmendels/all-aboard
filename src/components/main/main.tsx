import React from 'react';
import { mainStyles } from "./main.styles";
import { BoardContainer } from "../board/board-container";
import { LayersContainer } from "../layers/layers-container";
import { MainMenuContainer } from '../main-menu/main-menu-container';

export const Main: React.SFC = () => (
  <div className={mainStyles.root}>
    <div className={mainStyles.sidePanel}>
      <div className={mainStyles.mainMenu}>
        <MainMenuContainer />
      </div>
      <div className={mainStyles.layers}>
        <LayersContainer />
      </div>
    </div>
    <div className={mainStyles.board}>
      <BoardContainer />
    </div>
  </div>
);