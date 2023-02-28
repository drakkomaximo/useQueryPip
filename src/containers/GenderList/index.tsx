import { Box, CircularProgress, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, TextField, Typography } from '@mui/material'
import { FC } from 'react'
import { genderIcons } from '../../helper/genderIcons.helper'
import GenderTypes from '../GenderTypes'
import { GenderListProps } from './types'

const GenderList: FC<GenderListProps> = ({ people, gender, handleSize, size, handleGender, error, loading }) => {
    if (!error) {
        return (
            !loading ? (
                <CircularProgress />
            ) : (
                <>
                    <Stack display='flex' direction='row'>
                        <GenderTypes gender={gender} handleGender={handleGender} />
                        <TextField label='Tamaño' type='number' value={size} onChange={(e) => handleSize({ size: parseInt(e.target.value) })} />
                    </Stack>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <List>
                            {
                                people.map(({ name: { first, last, title } }, index) => (
                                    <ListItem disablePadding key={index}>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {genderIcons({ gender: title })}
                                            </ListItemIcon>
                                            <ListItemText primary={`${title} ${first} ${last} `} />
                                        </ListItemButton>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Box>
                </>
            )
        )
    }
    return (
        <>
            <Stack display='flex' direction='row'>
                <GenderTypes gender={gender} handleGender={handleGender} />
                <TextField label='Tamaño' type='number' value={size} onChange={(e) => handleSize({ size: parseInt(e.target.value) })} />
            </Stack>
            <Typography>{error}</Typography>
        </>
    )
}

export default GenderList