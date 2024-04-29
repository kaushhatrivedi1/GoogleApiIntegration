"use client"
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import { Event } from 'app/Calendar/page';

interface DayProps {
    date: Date;
    events: Event[]; // Events for this specific day
    selected?: boolean; // Indicates if the day is currently selected
    onDateSelect?: (date: Date) => void;
}

const Day: React.FC<DayProps> = ({ date, events, selected, onDateSelect }) => {
    const handleClick = () => {
        onDateSelect?.(date); // Call the callback function if provided
    };

    const formattedDate = date.getDate();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundColor: selected ? (theme) => theme.palette.primary.light : 'inherit',
                padding: (theme) => theme.spacing(1),
                gridTemplateRows: events.length > 0 ? '1fr auto' : '1fr', // Adjust row sizing for events
            }}
            onClick={handleClick}
        >
            <Typography variant="body1">{formattedDate}</Typography>
            {/* {events.length > 0 && <EventIcon />} */}
        </Box>
    );
};

export default Day;