import { VectorData } from "./geom/vector.model";

export type CardsState = {
  allIds: string[],
  byId: {
    [id: string]: CardData
  }
}

export const initialCardsState: CardsState = {
  allIds: ['a', 'b'],
  byId: {
    'a': {
      id: 'a',
      location: {
        x: 100,
        y: 100
      },
      dimensions: {
        x: 100,
        y: 100
      },
      text: 'This is a card.'
    },
    'b': {
      id: 'b',
      location: {
        x: 300,
        y: 100
      },
      dimensions: {
        x: 170,
        y: 100
      },
      text: 'This is another card.'
    }
  }
}

export type CardData = {
  id: string;
  location: VectorData;
  dimensions: VectorData;
  text: string;
};