import { VectorData } from "./geom/vector";

export type CardData = {
  id: string;
  location: VectorData;
  dimensions: VectorData;
  text: string;
};