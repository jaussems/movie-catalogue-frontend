export interface IMovieCard {
  title: string;
  adult?: boolean;
  imageSource?: string;
  rating?: number;
}

export interface IMovieListArray extends Array<IMovieCard> {}
