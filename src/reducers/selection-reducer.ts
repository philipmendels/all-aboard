import { Reducer } from "redux";
import { SelectionState, initialSelectionState, SelectedItemsState, SelectedItem } from "../models/selection";
import { AppAction } from "../actions/actions";
import { Vector } from "../models/geom/vector.model";
import { CardsState, CardData } from "../models/card";
import { Bounds } from "../models/geom/bounds.model";
import { getCardsArray } from "./cards-reducer";

export const selectionReducer: Reducer<SelectionState, AppAction> = (prevState = initialSelectionState, action) => {
  switch (action.type) {
    case 'START_SCALE_CARDS':
      const selectedCardsBounds = getSelectedCardsBounds(prevState.items, action.cards);
      return {
        action: {
          scaleStartBounds: selectedCardsBounds,
          scaleTransformHandle: action.transformHandle
        },
        items: Object.assign({},
          ...Object.entries(prevState.items).map(([id, item]) => {
            const selectedCard = action.cards.byId[id]!;
            const selectedItem: SelectedItem = {
              startScaleBoundsOffset: Vector.fromData(selectedCard.location).subtract(selectedCardsBounds.topLeft()),
              startScaleDimensions: Vector.fromData(selectedCard.dimensions).clone()
            }
            return {
              [id]: selectedItem
            }
          })
        )
      }
    default:
      return {
        ...prevState,
        items: selectedItemsReducer(prevState.items, action)
      }
  }
}

const selectedItemsReducer: Reducer<SelectedItemsState, AppAction> = (prevState = initialSelectionState.items, action) => {
  switch (action.type) {
    case 'SELECT_CARDS':
      return {
        ...prevState,
        ...action.ids.reduce((acc, id) => {
          acc[id] = {};
          return acc;
        }, {} as SelectedItemsState)
      }
    case 'DESELECT_CARD':
      const clone = { ...prevState } as SelectedItemsState;
      delete clone[action.id];
      return clone;
    case 'CLEAR_SELECTION':
      return {};
    case 'START_MOVE_CARDS':
      return Object.assign({},
        ...Object.entries(prevState).map(([id, item]) => {
          const selectedCard = action.cards.byId[id];
          const selectedItem: SelectedItem = {
            startMoveMouseOffset: Vector.fromData(selectedCard!.location).subtract(action.location)
          }
          return {
            [id]: selectedItem
          }
        })
      )
    case 'REMOVE_CARDS':
      return {};
    default:
      return prevState;
  }
}

const getSelectedCardsBounds = (state: SelectedItemsState, cardsState: CardsState): Bounds =>
  getCardsBounds(getSelectedCards(state, cardsState));

const getCardsBounds = (cards: CardData[]) =>
  Bounds.fromShapes(cards.map(card => Bounds.fromRect(Vector.fromData(card.location), Vector.fromData(card.dimensions))));

const getSelectedCards = (state: SelectedItemsState, cardsState: CardsState): CardData[] =>
  getCardsArray(cardsState).filter(card => isSelectedCard(state, card));

const isSelectedCard = (state: SelectedItemsState, card: CardData): boolean =>
  state[card.id] !== undefined;