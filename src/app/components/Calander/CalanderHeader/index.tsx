"use client"
import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface CalendarHeaderProps {
    currentViewDate: Date;
    onPrevMonth: () => void;
    onNextMonth: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ currentViewDate, onPrevMonth, onNextMonth }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <IconButton onClick={onPrevMonth}>
                <ArrowLeftIcon />
            </IconButton>
            <Typography variant="h5">
                {currentViewDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
            </Typography>
            <IconButton onClick={onNextMonth}>
                <ArrowRightIcon />
            </IconButton>
        </Box>
    );
};

export default CalendarHeader;
