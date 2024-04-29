"use client"
import React from 'react';
import Day from '../Day';
import { Box, Grid, Typography } from '@mui/material';
import { Event } from 'app/Calendar/page';


interface CalendarGridProps {
    weeks: Date[][];
    events: Event[];
    selectedDate?: Date;
    onDateSelect?: (date: Date) => void;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ weeks, events, selectedDate, onDateSelect }) => {
    // Flatten the weeks array to get all dates
    const allDates = weeks.reduce((acc, week) => acc.concat(week), []);

    return (
        <Box sx={{ overflowX: 'auto' }}>
            <Grid container spacing={0} >
                {allDates.map((day, index) => (
                    <Grid item key={index} xs={1} sx={{ textAlign: 'center', padding: 1 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{day.toLocaleDateString('en-US', { weekday: 'long' })}</Typography>
                            <Day date={day} events={events.filter((event) => event.date.toDateString() === day.toDateString())} selected={selectedDate?.getTime() === day.getTime()} onDateSelect={onDateSelect} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CalendarGrid;