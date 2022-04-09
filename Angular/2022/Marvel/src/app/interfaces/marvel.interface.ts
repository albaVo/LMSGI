export interface ICharacter  {
 id: number;
 name: string;
 description: string;
 thumbnail: ImageBitmap;
}

export interface IComic {
  id: number;
  title: string;
  description: string;
  thumbnail: ImageBitmap;
  format: string;
  pageCount: number;
}

export interface IEvent {
  id: number;
  title: string;
  description: string;
  thumbnail: ImageBitmap;
}

export interface ISeries {
  id: number;
  title: string;
  description: string;
  thumbnail: ImageBitmap;
  startYear: number;
  endYear: number;
  rating: string;
}

