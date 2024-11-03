export interface MovieTypes {
  id: number;
  adult: boolean;
  genres: string[];
  title: string;
  originalTitle: string;
  releaseDate: string;
  image: string;
  overview: string;
  voteAverage: number;
  voteCount: number;
  popularity: number;
  originalLanguage: OriginalLanguage;
}

export enum OriginalLanguage {
  En = 'en',
  Es = 'es',
  Fr = 'fr',
  Ja = 'ja',
}
