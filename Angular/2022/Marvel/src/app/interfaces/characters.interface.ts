import { ɵassignExtraOptionsToRouter } from "@angular/router";

export interface ICharacter  {
 id: string;
 name: string;
 description: string;
 modified: Date;
 resourceURL: string;
 urls: string;
 thumbnail: ImageBitmap;
 comics: string;
 stories: string;
 events: string;
 series: string;
}

export interface IUrl {
  type: string;
  url: string;
}

export interface IImage {
  path: string;
  extension: string;
}

export interface IComicList {
  available: string;
  returned: string;
  collectionURL: string;
  items: string;
}

export interface IComicSummary {
  resourceURL: string;
  name: string;
}

export interface IStorySummary {
  resourceURL: string;
  name: string;
  type: string;
}

export interface IEventList {
  available: string;
  returned: string;
  collectionURL: string;
  items: string;
}

export interface ISeriesSummary {
 esourceURL: string;
 name: string;
}

ɵassignExtraOptionsToRouter
