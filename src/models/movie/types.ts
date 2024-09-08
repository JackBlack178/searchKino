export type Movie = {
  id: number;
  name?: string;
  alternativeName?: string;
  type:
    | "movie"
    | "tv-series"
    | "cartoon"
    | "anime"
    | "animated_series"
    | "tv-show";
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

  genres: Array<{
    name: string;
  }>;

  persons: [
    {
      id: number | null;
      name: string | null;
    },
  ];

  similarMovies: [
    {
      id: number | null;
      rating: {
        kp: number | null;
      };
      name: string;
      year: number;
      type: string;
    },
    poster: {
      url: string | null;
      previewUrl: string | null;
    },
  ];
};

export const isMovie = (data: any): data is Movie => {
  return (
    data &&
    typeof data === "object" &&
    data.id &&
    data.type &&
    (data.type === "movie" ||
      data.type === "tv-series" ||
      data.type === "cartoon" ||
      data.type === "anime" ||
      data.type === "animated_series" ||
      data.type === "tv-show")
  );
};

export const movieTypeMapper = (
  type:
    | "movie"
    | "tv-series"
    | "cartoon"
    | "anime"
    | "animated_series"
    | "tv-show",
) => {
  const map = {
    movie: "Фильм",
    "tv-series": "Сериал",
    cartoon: "Мультфильм",
    anime: "Аниме",
    animated_series: "Анимированный мультфильм",
    "tv-show": "ТВ-шоу",
  };

  return map[type];
};
