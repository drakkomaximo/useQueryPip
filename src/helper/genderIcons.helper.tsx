import { Face, Face2, NoAccounts } from '@mui/icons-material';

export const genderIcons = ({ gender }: { gender: string }) => {
    if (gender === 'Mr') return <Face />
    if (gender === 'Ms' || gender === 'Mrs' || gender === 'Miss') return <Face2 />
    return <NoAccounts />
}