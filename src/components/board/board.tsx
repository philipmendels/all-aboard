import React from "react";
import { BoardProps, BoardComponentState } from "./board.types";
import { Card } from "../card/card";
import { CardData } from "../../models/card";
import { Vector } from "../../models/geom/vector.model";
import { isSelectionKeyDown } from "../../util/util";
import { boardStyles } from "./board.styles";
import { Bounds } from "../../models/geom/bounds.model";

export class Board extends React.Component<BoardProps, BoardComponentState> {

  private marqueeStartLocation?: Vector;
  private isMouseDownOnCard = false;
  private isDraggingCard = false;
  private isMouseDownOnBoard = false;

  public state = {
    isDraggingMarquee: false,
    marquee: new Bounds(0, 0, 0, 0)
  }

  public render() {
    const { marquee } = this.state;
    const marqueeStyle = {
      left: marquee.left() + 'px',
      top: marquee.top() + 'px',
      width: marquee.width() + 'px',
      height: marquee.height() + 'px'
    }
    const { cards } = this.props;
    return (
      <div
        className={boardStyles.rootClass}
        tabIndex={0}
        onMouseDown={this.mouseDownOnBoard}
        onMouseMove={this.mouseMoveOnBoard}
        onMouseUp={this.mouseUpOnBoard}
        onMouseLeave={this.mouseLeaveBoard}
        onDoubleClick={this.dblclickBoard}
        onKeyDown={this.keyDownOnBoard}
      >
        {
          cards.map(card => (
            <Card
              key={card.id}
              {...card}
              onMouseDown={e => { this.mouseDownOnCard(e, card) }}
              isDragged={this.isDragged(card)}
              isSelected={this.isSelected(card)}
            />
          ))
        }
        {this.state.isDraggingMarquee && <div className={boardStyles.marqueeClass} style={marqueeStyle} />}
      </div>
    );
  }

  private mouseDownOnBoard = (event: React.MouseEvent<HTMLDivElement>): void => {
    this.clearSelection();
    this.isMouseDownOnBoard = true;
    this.marqueeStartLocation = new Vector(event.clientX, event.clientY);
  }

  private mouseMoveOnBoard = (event: React.MouseEvent<HTMLDivElement>): void => {
    const boardLocation = new Vector(event.clientX, event.clientY);
    if (this.isMouseDownOnCard) {
      this.isDraggingCard = true;
      this.props.moveCards(boardLocation);
    } else if (this.isMouseDownOnBoard) {
      const start = this.marqueeStartLocation!;
      this.setState({
        isDraggingMarquee: true,
        marquee: new Bounds(
          Math.min(boardLocation.x, start.x),
          Math.min(boardLocation.y, start.y),
          Math.max(boardLocation.x, start.x),
          Math.max(boardLocation.y, start.y)
        )
      })
    }
    // else if (this.isMouseDownOnTransformHandle) {
    //   this.props.onScaleCards(boardLocation);
    // }
  }

  private mouseUpOnBoard = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (this.state.isDraggingMarquee) {
      const cardIdsToSelect = this.props.cards
        .filter(card => {
          const cardBounds = Bounds.fromRect(Vector.fromData(card.location), Vector.fromData(card.dimensions));
          return cardBounds.intersectsBounds(this.state.marquee);
        })
        .map(card => card.id);

      this.props.selectCards(cardIdsToSelect);
    }
    this.clearMouseStates();
  }

  private mouseLeaveBoard = (event: React.MouseEvent<HTMLDivElement>): void => {
    this.clearMouseStates();
  }

  private dblclickBoard = (event: React.MouseEvent<HTMLDivElement>): void => {
    this.props.addCard(new Vector(event.clientX, event.clientY));
  }

  private keyDownOnBoard = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.keyCode === 8 || event.keyCode === 46) {
      // backspace and delete
      this.props.removeCards();
      event.stopPropagation();
      event.preventDefault();
    }
  }

  private mouseDownOnCard = (event: React.MouseEvent<HTMLDivElement>, mouseDownCard: CardData): void => {
    event.stopPropagation();
    this.isMouseDownOnCard = true;
    const boardLocation = new Vector(event.clientX, event.clientY);

    if (isSelectionKeyDown(event)) {
      if (!this.isSelected(mouseDownCard)) {
        this.selectCard(mouseDownCard);
      } else {
        this.deselectCard(mouseDownCard);
      }
    } else {
      if (!this.isSelected(mouseDownCard)) {
        this.clearSelection();
        this.selectCard(mouseDownCard);
      }
    }

    this.props.startMoveCards(boardLocation);
  }

  private isSelected = (card: CardData): boolean => {
    return this.props.selectedItems[card.id] !== undefined;
  }

  // private getSelectedCards = (): CardData[] => {
  //   return this.props.cards.filter(card => this.isSelected(card));
  // }

  private isDragged = (card: CardData): boolean => {
    return this.isDraggingCard && this.isSelected(card);
  }

  private deselectCard = (card: CardData) => {
    this.props.deselectCard(card.id);
  }

  private selectCard = (card: CardData) => {
    this.props.selectCards([card.id]);
  }

  private clearSelection = (): void => {
    this.props.clearSelection();
  }

  private clearMouseStates = (): void => {
    this.isMouseDownOnCard = false;
    this.isDraggingCard = false;
    this.isMouseDownOnBoard = false;
    // this.isMouseDownOnTransformHandle = false;
    this.setState({ isDraggingMarquee: false });
  }
}