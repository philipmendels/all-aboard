import { CardComponentProps } from "./card.types";
import { cardClass } from "./card.styles";
import { px } from "csx";
import React from "react";
import { Colors } from "../../styles/styles";

export const Card: React.SFC<CardComponentProps> = ({
  location, dimensions, isSelected, isHovered, text,
  onMouseDown, onMouseEnter, onMouseLeave: onMouseleave }) => (
    <div
      draggable={false}
      className={cardClass}
      style={{
        left: px(location.x),
        top: px(location.y),
        width: px(dimensions.x),
        height: px(dimensions.y),
        borderColor: isHovered || isSelected ? Colors.HIGHLIGHT : 'lightgray' ,
        outline: isHovered ? `1px solid ${Colors.HIGHLIGHT}` : undefined
      }}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseleave}
    >
      {text}
    </div>
  );