import { MarvelComic } from "./marvelComic";
import { MarvelEvent } from "./marvelEvent";
import { MarvelSeries } from "./marvelSeries";
import { MarvelStory } from "./marvelStory";
import { MarvelThumbnail } from "./marvelThumbnail";
import { MarvelUrl } from "./marvelUrl";

export class MarvelCharacter {
    id?: number;
    name?: string;
    description?: string;
    modified?: string;
    resourceURI?: string;
    urls: MarvelUrl[] = [];
    thumbnail?: MarvelThumbnail;
    comics: MarvelComic[] = [];
    events: MarvelEvent[] = [];
    stories: MarvelStory[] = [];
    series: MarvelSeries[] = [];
}