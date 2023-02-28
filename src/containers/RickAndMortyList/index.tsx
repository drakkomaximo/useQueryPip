import { InsertLink } from '@mui/icons-material'
import { Box, CircularProgress, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material'
import { FC } from 'react'
import { RickAndMortyListProps } from './types'

const RickAndMortyList: FC<RickAndMortyListProps> = ({ rickAndMortyData, handleEpisode, error, loading, character }) => {
    if (rickAndMortyData) {
        const { episode, name, characters } = rickAndMortyData
        return (
            !loading ?
                <CircularProgress /> : (
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <TextField label='Capítulo' type='number' defaultValue={character} onChange={(e) => handleEpisode({ episode: parseInt(e.target.value) })} />
                        <Typography>{episode}</Typography>
                        <Typography>{name}</Typography>
                        <List>
                            {
                                characters.map((character, index) => (
                                    <ListItem disablePadding key={index}>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <InsertLink />
                                            </ListItemIcon>
                                            <ListItemText primary={character} />
                                        </ListItemButton>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Box>
                )
        )
    }
    return (
        <>
            <TextField label='Capítulo' type='number' defaultValue={character} onChange={(e) => handleEpisode({ episode: parseInt(e.target.value) })} />
            <Typography>{error}</Typography>
        </>
    )


}

export default RickAndMortyList