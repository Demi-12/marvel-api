import { MarvelItem } from "./marvelItems";

export class MarvelStory {
    available?: number;
    collectionURI?: string;
    items: MarvelItem[] = [];
    returned?: number
}