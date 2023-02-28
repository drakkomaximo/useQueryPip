import { RickAndMortyDto } from "../../services/interfaces/outputs/rickAndMorty"

export type RickAndMortyListProps = {
    rickAndMortyData: RickAndMortyDto | null;
    handleEpisode: ({ episode }: { episode: number }) => void
    error: string | null;
    loading: boolean;
    character: number;
}