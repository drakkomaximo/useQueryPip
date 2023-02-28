import { z } from 'zod';

export type RickAndMortyDto = z.infer<typeof RickAndMortySchema>

export const RickAndMortySchema = z.object({
  id: z.number(),
  name: z.string(),
  air_date: z.string(),
  episode: z.string(),
  characters: z.array(z.string()),
  url: z.string(),
  created: z.string()
})