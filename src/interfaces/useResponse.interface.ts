import { z } from "zod";
import { GenderSchema } from "./useQueryPip.interface";

export type UseResponseDto = z.infer<typeof UseResponseSchema>

export const UseResponseSchema = z.object({ gender: GenderSchema, episode: z.number(), size: z.number().nullish() })