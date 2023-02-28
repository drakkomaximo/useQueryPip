import { RandonUserParamsDto } from "../interfaces/outputs/randonUser";
import { PARAMS_QUERY_ROUTES, RANDOM_API_ROUTES } from "../interfaces/routes";

export const urlGetRandonUsers = ({ gender = 'others', size = 2 }: RandonUserParamsDto) => (`${RANDOM_API_ROUTES.GET_RANDOM_USER}?gender=${gender}&results=${size}${PARAMS_QUERY_ROUTES.RANDOM_USER_PARAMS}`);

export const urlGetRickAndMorty = ({ episode }: { episode: number }) => (`${RANDOM_API_ROUTES.GET_RICK_AND_MORTY}${PARAMS_QUERY_ROUTES.RICK_AND_MORTY_PARAMS}${episode}`);
