import { SelectChangeEvent } from "@mui/material"
import { GenderDto } from "../../interfaces/useQueryPip.interface"

export type ControlledOpenSelect = {
    gender: GenderDto
    handleGender: (event: SelectChangeEvent<GenderDto>) => void
}