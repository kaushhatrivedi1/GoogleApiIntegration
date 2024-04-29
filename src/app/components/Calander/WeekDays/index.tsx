"use client"
import React from 'react';
import { Box, Typography } from '@mui/material';

const Weekdays: React.FC = () => {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    return (
        <></>
        // <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', textAlign: 'center', marginBottom: 1 }}>
        //     {weekdays.map((day) => (
        //         <Typography key={day} variant="body2" sx={{ fontWeight: 'bold' }}>
        //             {day}
        //         </Typography>
        //     ))}
        // </Box>
    );
};

export default Weekdays;