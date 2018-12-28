import { CardData } from "./card";

export type BoardData = {
  cards: {
    allIds: string[],
    byId: {
      [id: string]: CardData
    }
  }
}

