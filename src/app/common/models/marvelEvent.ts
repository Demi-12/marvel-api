import { MarvelItem } from "./marvelItems";

export class MarvelEvent {
    available?: number;
    collectionURI: string = '';
    items: MarvelItem[] = [];
    returned?: number
}