import { MarvelItem } from "./marvelItems";

export class MarvelSeries {
    available?: number;
    collectionURI?: string;
    items: MarvelItem[] = [];
    returned?: number
}