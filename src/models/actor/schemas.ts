import { z } from "zod";

export const actorSchema = z.object({
  id: z.number(),
  name: z.string().nullable().optional(),
  enName: z.string().nullable().optional(),
  photo: z.string().nullable().optional(),
  sex: z.string().nullable().optional(),
  growth: z.number().nullable().optional(),
  birthday: z.string().nullable().optional(),
  age: z.number().nullable().optional(),
  facts: z.array(z.object({ value: z.string() })).optional(),
  movies: z
    .array(
      z.object({
        id: z.number(),
        name: z.string().nullable().optional(),
        rating: z.number().nullable().optional(),
        general: z.boolean().nullable().optional(),
      }),
    )
    .optional(),
});
