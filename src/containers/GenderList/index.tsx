import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { FC } from 'react'
import { genderIcons } from '../../helper/genderIcons.helper'
import { GenderListProps } from './types'

const GenderList: FC<GenderListProps> = ({ people }) => {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List>
                {
                    people.map(({ name: {first, last, title} }, index) => (
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
    )
}

export default GenderList