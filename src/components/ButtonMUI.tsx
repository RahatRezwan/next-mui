'use client'

import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const ButtonMUI = () => {
    const [formats, setFormats] = useState<string | null>(null)
    console.log({ formats });
    const handleFormatChange = (event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
        setFormats(updatedFormats)
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text'>
                    Text
                </Button>
                <Button variant='contained'>
                    Contained
                </Button>
                <Button variant='outlined'>
                    Outlined
                </Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>secondary</Button>
                <Button variant='contained' color='warning'>warning</Button>
                <Button variant='contained' color='info'>info</Button>
                <Button variant='contained' color='success'>success</Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>medium</Button>
                <Button variant='contained' size='large'>large</Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant='contained' startIcon={<SendIcon />} onClick={() => alert('clicked')} disableRipple>Send</Button>

                <Button variant='contained' endIcon={<SendIcon />} disableElevation>Send</Button>

                <IconButton size='small' color='success'>
                    <SendIcon />
                </IconButton>
            </Stack>

            <Stack direction="row">
                <ButtonGroup variant='contained'
                    orientation='vertical'
                    size='small'
                    color='secondary'
                    aria-label='alignment button group'
                >
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction="row">
                <ToggleButtonGroup
                    aria-label='text formatting'
                    value={formats}
                    onChange={handleFormatChange}
                    size='small'
                    color='success'
                    orientation='vertical'
                    exclusive
                >
                    <ToggleButton value='Bold'><FormatBoldIcon /></ToggleButton>

                    <ToggleButton value='Italic'><FormatItalicIcon /></ToggleButton>

                    <ToggleButton value='Underlined'><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    );
};

export default ButtonMUI;