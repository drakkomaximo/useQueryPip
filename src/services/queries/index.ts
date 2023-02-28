import { AxiosInstance } from "../../config/axios.config";
import { RandonUserParamsDto, RandonUserSchema } from "../interfaces/outputs/randonUser";
import { RickAndMortySchema } from "../interfaces/outputs/rickAndMorty";
import { urlGetRandonUsers, urlGetRickAndMorty } from "./urlApi";

export const getGetRandonUsersApi = async ({ gender, size }: RandonUserParamsDto) => {
  const response = await AxiosInstance.get(urlGetRandonUsers({ gender, size }));
  return RandonUserSchema.parse(response.data);
};

export const getRickAndMortyApi = async ({ episode }: { episode: number }) => {
  const response = await AxiosInstance.get(urlGetRickAndMorty({ episode }));
  return RickAndMortySchema.parse(response.data);
};