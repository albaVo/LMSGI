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
  id: string;
  title: string;
  description: string;
  thumbnail: ImageBitmap;
}
