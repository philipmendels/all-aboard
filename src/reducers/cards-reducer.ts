import { Reducer } from "redux";
import { CardsState, initialCardsState, CardData } from "../models/card";
import { AppAction } from "../actions/actions";
import { MoveActionItemState, ScaleActionItemState, ScaleActionState } from "../models/selection";
import { v4 } from "uuid";
import { Vector } from "../models/geom/vector.model";
import { randomText } from "../util/randomText";
import { TransformationProps, getTransformation } from "../components/transform-tool/transform.util";

const defaultCardSize = new Vector(120, 90);

export const cardsReducer: Reducer<CardsState, AppAction> = (prevState = initialCardsState, action) => {
  switch (action.type) {
    case 'AD_CARD':
      const newCard = {
        id: v4(),
        text: randomText(),
        location: Vector.fromData(action.location).subtract(defaultCardSize.multiply(0.5)),
        dimensions: defaultCardSize.clone()
      }
      return {
        allIds: [...prevState.allIds, newCard.id],
        byId: {
          ...prevState.byId,
          [newCard.id]: newCard
        }
      }
    case 'REMOVE_CARDS':
      const selectedIds = Object.keys(action.selectedItems);
      const byId = { ...prevState.byId };
      selectedIds.forEach(id => {
        delete byId[id];
      });
      return {
        allIds: prevState.allIds.filter(id => !selectedIds.includes(id)),
        byId
      }
    case 'MOVE_CARDS':
      return {
        ...prevState,
        byId: {
          ...prevState.byId,
          ...Object.entries(action.selectedItems).reduce((acc, [id, selectedItem]) => {
            const selectionState = selectedItem as MoveActionItemState;
            const card = prevState.byId[id];
            acc[id] = {
              ...card,
              location: action.location.add((selectionState.startMoveMouseOffset))
            }
            return acc;
          }, {} as CardsState['byId']
          )
        }
      }
    case 'SCALE_CARDS':
      const selection = action.selection;
      return {
        ...prevState,
        byId: {
          ...prevState.byId,
          ...Object.entries(selection.items).reduce((acc, [id, selectedItem]) => {
            const selectionState = selectedItem as ScaleActionItemState;
            const card = prevState.byId[id];
            const actionState = selection.action as ScaleActionState;
            const transformationProps: TransformationProps = {
              startBounds: actionState.scaleStartBounds,
              startBoundsOffset: selectionState.startScaleBoundsOffset,
              startDimensions: selectionState.startScaleDimensions,
              handle: actionState.scaleTransformHandle,
              mouseLocation: action.location
            }
            const transformation = getTransformation(transformationProps);
            acc[id] = {
              ...card,
              location: transformation.location,
              dimensions: transformation.dimensions
            }
            return acc;
          }, {} as CardsState['byId'])
        }
      }
     case 'REORDER_CARD':
        const index = prevState.allIds.indexOf(action.id);
        const allIds = [...prevState.allIds];
        const [removed] = allIds.splice(index, 1);
        allIds.splice(action.toIndex, 0, removed);
        return {
            ...prevState,
            allIds
        }
    default:
      return prevState;
  }
}

export const getCardsArray = (state: CardsState): CardData[] => {
  return state.allIds.map(id => state.byId[id]);
}

export const getAllCards = (state: CardsState): CardData[] =>
  getCardsArray(state);