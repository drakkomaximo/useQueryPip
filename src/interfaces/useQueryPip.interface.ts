export type useQueryPipProps = {
    cacheKey: string;
}

export type GenderType = "Mr" | "Ms" | string

export type Result = {
    name: {
        title: string,
        first: string,
        last: string
    }
}

export type ApiResponse = {
    results: Result[]
}

export type InitialStateProps = {
    status: string,
    error: null,
    data: ApiResponse | null,
}