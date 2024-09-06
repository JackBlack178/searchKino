import { z } from "zod";

export const movieSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
  alternativeName: z.string().optional(),
  type: z.string(),
  year: z.number().optional(),
  description: z.string().optional(),
  shortDescription: z.string().optional(),
  slogan: z.string().optional(),
  rating: z.object({
    kp: z.number().optional(),
    imdb: z.number().optional(),
    tmdb: z.number().optional(),
    filmCritics: z.number().optional(),
    russianFilmCritics: z.number().optional(),
    await: z.number().nullable(),
  }),
  movieLength: z.number().optional(),
  ageRating: z.number().optional(),
  logo: z.object({
    url: z.string().optional(),
  }),
  poster: z.object({
    url: z.string().optional(),
    previewUrl: z.string().optional(),
  }),
  videos: z.object({
    trailers: z.array(
      z
        .object({
          url: z.string().optional(),
          name: z.string().optional(),
          site: z.string().optional(),
          type: z.string().optional(),
          size: z.string().optional(),
        })
        .optional(),
    ),
    teasers: z
      .array(
        z.object({
          url: z.string().optional(),
          name: z.string().optional(),
          site: z.string().optional(),
          type: z.string().optional(),
          size: z.number(),
        }),
      )
      .optional(),
  }),
  genres: z.array(
    z.object({
      name: z.string(),
    }),
  ),
});
