export type Movie = {
  id: number;
  name?: string;
  alternativeName?: string;
  type: string;
  year?: number;
  description?: string;
  shortDescription?: string;
  slogan?: string;
  rating: {
    kp?: number;
    imdb?: number;
    tmdb?: number;
    filmCritics?: number;
    russianFilmCritics?: number;
    await?: number | null;
  };
  movieLength?: number;
  ageRating?: number;
  logo: {
    url?: string;
  };
  poster: {
    url?: string;
    previewUrl?: string;
  };
  videos: {
    trailers: Array<{
      url?: string;
      name?: string;
      site?: string;
      type?: string;
      size?: string;
    }>;
    teasers?: Array<{
      url?: string;
      name?: string;
      site?: string;
      type?: string;
      size: number;
    }>;
  };
  genres: Array<{
    name: string;
  }>;
};
