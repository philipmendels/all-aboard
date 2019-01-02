import React from 'react';
import { mainStyles } from "./main.styles";
import { BoardContainer } from "../board/board-container";
import { LayersContainer } from "../layers/layers-container";

export const Main:React.SFC = () => (
  <div className={mainStyles.root}>
    <div className={mainStyles.layers}>
      <LayersContainer/>
    </div>
    <div className={mainStyles.board}>
      <BoardContainer/>
    </div>
  </div>
);