import React from "react";
import { BoardComponentProps } from "./board.types";
import { px } from 'csx';
import { Card } from "../card/card";

export class BoardComponent extends React.Component<BoardComponentProps> {
  public render() {
    const { cards } = this.props;
    return (
      <div>
        {
          cards.map(card => (
            <Card
              key={card.id}
              {...card}
              onMouseDown={() => null}
              isDragged={false}
              isSelected={false}
            />
          ))
        }
      </div>
    );
  }
}