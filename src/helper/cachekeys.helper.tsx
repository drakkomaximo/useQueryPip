import { RandonUserParamsDto } from "../services/interfaces/outputs/randonUser"

export const randonUsersCacheKey = ({ gender, size }: RandonUserParamsDto) => (`randonUsers:${gender}${size}`)
export const rickAndMortyCacheKey = ({ episode }: { episode: number }) => (`rickAndMorty:${episode}`)