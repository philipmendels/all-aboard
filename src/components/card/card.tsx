import { CardComponentProps } from "./card.types";
import { cardStyle } from "./card.styles";
import { px } from "csx";
import React from "react";

export const Card: React.SFC<CardComponentProps> = ({ location, dimensions, isSelected, text, onMouseDown }) => (
  <div 
    className={cardStyle}
    style={{
      left: px(location.x),
      top: px(location.y),
      width: px(dimensions.x),
      height: px(dimensions.y),
      border: isSelected ? '1px dashed black' : '1px solid lightgray'
    }}
    onMouseDown={onMouseDown}>
    {text}
  </div>
);