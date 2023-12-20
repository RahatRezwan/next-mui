'use client'
import { Box, TextField, MenuItem } from '@mui/material';
import React from 'react';

const SelectMUI = () => {
    const [country, setCountry] = React.useState<string[]>([]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry((prev) => [...prev, event.target.value]);
    }
    return (
        <Box width='250px'>
            <TextField label='Select Country' select value={country} onChange={handleChange} fullWidth>
                <MenuItem value='India'>India</MenuItem>
                <MenuItem value='USA'>USA</MenuItem>
                <MenuItem value='UK'>UK</MenuItem>
            </TextField>

            <TextField label='Select Country' select value={country} onChange={handleChange} fullWidth
                SelectProps={{ multiple: true }}>
                <MenuItem value='India'>India</MenuItem>
                <MenuItem value='USA'>USA</MenuItem>
                <MenuItem value='UK'>UK</MenuItem>
            </TextField>
        </Box>
    );
};

export default SelectMUI;