import { SelectChangeEvent } from "@mui/material";
import { GenderDto } from "../../interfaces/useQueryPip.interface";
import { ResultFieldDto } from "../../services/interfaces/outputs/randonUser"

export type GenderListProps = {
    people: ResultFieldDto[];
    gender: GenderDto
    size: number;
    handleSize: ({ size }: { size: number }) => void;
    handleGender: (event: SelectChangeEvent<GenderDto>) => void
    error: string | null;
    loading: boolean;
}