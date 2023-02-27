import { Face, Face2, NoAccounts } from '@mui/icons-material';
import { GenderType } from '../interfaces/useQueryPip.interface';

export const genderIcons = ({gender}:{gender: GenderType}) =>{
    if(gender === 'Mr' ) return <Face />
    if(gender === 'Ms' || gender === 'Mrs') return <Face2 />
    return <NoAccounts />
}