import { MarvelItem } from "./marvelItems";

export class MarvelComic {
    available?: number;
    collectionURI?: string;
    items: MarvelItem[] = [];
    returned?: number;
}