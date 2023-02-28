import { z } from "zod";

export type GenderDto = z.infer<typeof GenderSchema>
export type ActionDto = z.infer<typeof ActionSchema>
export const GenderSchema = z.enum(['male', 'female', 'others'])
export const ActionSchema = z.enum(['FETCHING', 'FETCHED', 'FETCH_ERROR'])

export type InitialStateProps<T> = {
    status: boolean,
    error: string | null,
    data: T | null,
}

export type RefRProps<T> = {
    [key: string]: T
}

export type ActionProps<T> = | { type: 'FETCHING', status: boolean }
    | { type: 'FETCHED', result: T, status: boolean }
    | { type: 'FETCH_ERROR', error: string, status: boolean }