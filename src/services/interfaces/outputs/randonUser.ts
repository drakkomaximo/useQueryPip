import { z } from 'zod';
import { GenderSchema } from '../../../interfaces/useQueryPip.interface';

export type RandonUserParamsDto = z.infer<typeof RandonUserParamsSchema>

export const RandonUserParamsSchema = z.object({
  size: z.number().nullish(),
  gender: GenderSchema.nullish()
})

export const NameFieldSchema = z.object({
  title: z.string(),
  first: z.string(),
  last: z.string()
})

export type ResultFieldDto = z.infer<typeof ResultFieldSchema>

export const ResultFieldSchema = z.object({
  name: NameFieldSchema
})

export type RandonUserDto = z.infer<typeof RandonUserSchema>

export const RandonUserSchema = z.object({
  results: z.array(ResultFieldSchema)
})