import { FC, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ControlledOpenSelect } from './types';
import { genderList } from './constants';

const GenderTypes: FC<ControlledOpenSelect> = ({ gender, handleGender }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl sx={{ minWidth: 120 }}>
      <InputLabel id="demo-controlled-open-select-label">Género</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={gender}
        label="Género"
        onChange={handleGender}
      >
        {
          genderList.map((item) => (
            <MenuItem key={item.id} value={item.gender}>{item.title}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
}

export default GenderTypes
