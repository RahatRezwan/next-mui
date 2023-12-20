'use client'
import { InputAdornment, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

const TextFieldMUI = () => {
    const [value, setValue] = useState('Controlled');
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Enter Name' variant='outlined' />
                <TextField label='Enter Name' variant='filled' />
                <TextField label='Enter Name' variant='standard' />
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='Small Secondary' size='small' color='secondary' />
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='Form Input' required value={value} onChange={(event) => setValue(event?.target.value)} error={!value} helperText={value ? "" : "Required"} />
                <TextField label='Password'
                    type='password' helperText='Do not share your password' />
                <TextField label='Disabled' disabled />
                <TextField label='Read Only' InputProps={{ readOnly: true }} />
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='Amount' InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }} />
                <TextField label='Weight' InputProps={{
                    endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                }} />
            </Stack>
        </Stack>
    );
};

export default TextFieldMUI;