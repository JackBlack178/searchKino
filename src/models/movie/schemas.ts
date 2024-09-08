import { z } from "zod";

export const movieSchema = z.object({
  id: z.number(),
  name: z.string().optional().nullable(),
  alternativeName: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  year: z.number().optional().nullable(),
  description: z.string().optional().nullable(),
  shortDescription: z.string().optional().nullable(),
  slogan: z.string().optional().nullable(),
  rating: z
    .object({
      kp: z.number().optional().nullable(),
      imdb: z.number().optional().nullable(),
      tmdb: z.number().optional().nullable(),
      filmCritics: z.number().optional().nullable(),
      russianFilmCritics: z.number().optional().nullable(),
      await: z.number().nullable(),
    })
    .optional(),
  movieLength: z.number().optional().nullable(),
  ageRating: z.number().optional().nullable(),
  logo: z
    .object({
      url: z.string().optional().nullable(),
    })
    .optional()
    .nullable(),
  poster: z
    .object({
      url: z.string().optional().nullable(),
      previewUrl: z.string().optional().nullable(),
    })
    .optional()
    .nullable(),

  genres: z
    .array(
      z.object({
        name: z.string().nullable(),
      }),
    )
    .optional()
    .nullable(),

  persons: z
    .array(
      z
        .object({
          id: z.number().nullable().nullable(),
          name: z.string().nullable().nullable(),
        })
        .optional(),
    )
    .optional(),

  similarMovies: z
    .array(
      z
        .object({
          id: z.number().nullable(),
          rating: z
            .object({
              kp: z.number().optional(),
            })
            .optional(),
          name: z.string().nullable().optional(),
          year: z.number().optional().optional(),
          type: z.string().nullable().optional(),
          poster: z.object({
            previewUrl: z.string().optional(),
          }),
        })
        .optional(),
    )
    .optional(),
});
