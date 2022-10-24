import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';
import React from 'react';

import './RefresherOption.scss';

type RefresherOptionProps = {
  onChange: (value: number) => void;
  value: number;
};

const RefresherOption = ({ onChange, value }: RefresherOptionProps) => {
  const handleChange = (event: SelectChangeEvent<number>) => {
    onChange(event.target.value as number);
  };
  return (
    <FormControl className="refresher-selector">
      <InputLabel id="demo-simple-select-label">Refresh time</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Refresh time"
        onChange={handleChange}
      >
        <MenuItem value={2}>2s</MenuItem>
        <MenuItem value={3}>3s</MenuItem>
        <MenuItem value={5}>5s</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
      </Select>
    </FormControl>
  );
};

export default RefresherOption;
