export interface ICharacter  {
 id: string;
 name: string;
 description: string;
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
  items: IComicSummary[];
}

export interface IComicSummary {
  resourceURL: string;
  name: string;
}

export interface IStoryList {
  avaliable: string;
  returned: string;
  collectionURL: string;
  items: IStorySummary[];
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
  items: IEventSummary[];
}

export interface IEventSummary {
  resourceURL: string;
  name: string;
}

export interface ISeriesList {
  available: string;
  returned: string;
  collectionURL: string;
  items: ISeriesSummary[];
}

export interface ISeriesSummary {
 esourceURL: string;
 name: string;
}
