import { randonUsersCacheKey, rickAndMortyCacheKey } from "../helper/cachekeys.helper"
import { UseResponseDto } from "../interfaces/useResponse.interface"
import { RandonUserDto } from "../services/interfaces/outputs/randonUser"
import { RickAndMortyDto } from "../services/interfaces/outputs/rickAndMorty"
import { getGetRandonUsersApi, getRickAndMortyApi } from "../services/queries"
import { useQueryPip } from "./useQueryPip"

export const useResponse = ({ gender, episode, size }: UseResponseDto) => {
    const { data: randonUserResponse, error: randonUserResponseError, status: randonUserResponseStatus } = useQueryPip<RandonUserDto>(randonUsersCacheKey({ gender, size }), () => getGetRandonUsersApi({ gender, size }))
    const { data: rickAndMortyResponse, error: rickAndMortyResponseError, status: rickAndMortyResponseStatus } = useQueryPip<RickAndMortyDto>(rickAndMortyCacheKey({ episode }), () => getRickAndMortyApi({ episode }))

    return {
        randonUserResponse,
        rickAndMortyResponse,
        randonUserResponseStatus,
        rickAndMortyResponseStatus,
        randonUserResponseError,
        rickAndMortyResponseError,
    }
}