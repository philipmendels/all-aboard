import { VectorData, Vector } from "./geom/vector.model";
import { randomText } from "../util/randomText";
import { v4 } from "uuid";

export type CardsState = {
  allIds: string[],
  byId: {
    [id: string]: CardData
  }
}

export type CardData = {
  id: string;
  location: VectorData;
  dimensions: VectorData;
  text: string;
};

const defaultCardSize = new Vector(120, 90);

export const createNewCard = (vector:Vector) => ({
  id: v4(),
  text: randomText(),
  location: Vector.fromData(vector).subtract(defaultCardSize.multiply(0.5)),
  dimensions: defaultCardSize.clone()
});

const initialCards = [createNewCard(new Vector(200, 400)), createNewCard(new Vector(600, 200))];

export const initialCardsState: CardsState = {
  allIds: [initialCards[0].id, initialCards[1].id],
  byId: {
    [initialCards[0].id]: initialCards[0],
    [initialCards[1].id]: initialCards[1],
  }
};

