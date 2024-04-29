"use client"
import React, { useState } from 'react';
import { Box } from '@mui/material';
import CalendarHeader from '../components/Calander/CalanderHeader';
import Weekdays from '../components/Calander/WeekDays';
import CalendarGrid from '../components/Calander/CalendarGrid';
export interface Event {
    id: number;
    title: string;
    date: Date;
    bubbles: boolean;
    cancelBubble: boolean;
    cancelable: boolean;
    composed: boolean;
    // Add any other properties that are present in your Event objects
}


const Calendar: React.FC = () => {
    // Dummy data for the Calendar component
    const dummyEvents: Event[] = [
        {
            id: 1,
            title: 'Event 1',
            date: new Date(2024, 3, 5),
            bubbles: false,
            cancelBubble: false,
            cancelable: false,
            composed: false,
            // Add other necessary properties
        },
        {
            id: 2,
            title: 'Event 2',
            date: new Date(2024, 3, 12),
            bubbles: false,
            cancelBubble: false,
            cancelable: false,
            composed: false,
            // Add other necessary properties
        },
        // Add more events as needed
    ];


    const [currentViewDate, setCurrentViewDate] = useState(new Date());

    const handlePrevMonth = () => {
        setCurrentViewDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentViewDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };
    const getWeeksInMonth = (date: Date): Date[][] => {
        const weeks: Date[][] = [];
        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const startDate = new Date(firstDayOfMonth);
        let currentDate = new Date(startDate);

        while (currentDate.getMonth() === date.getMonth()) {
            const week: Date[] = [];
            for (let i = 0; i < 7; i++) {
                week.push(new Date(currentDate));
                currentDate.setDate(currentDate.getDate() + 1);
            }
            weeks.push(week);
        }

        // If the last week is incomplete (part of it falls into next month), add it
        if (weeks[weeks.length - 1].length !== 7) {
            const lastWeek = weeks.pop()!;
            const lastDayOfWeek = lastWeek[lastWeek.length - 1];
            while (lastDayOfWeek.getMonth() === date.getMonth()) {
                lastWeek.push(new Date(lastDayOfWeek));
                lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 1);
            }
            weeks.push(lastWeek);
        }

        return weeks;
    };


    return (
        <Box sx={{ padding: 2 }}>
            <CalendarHeader currentViewDate={currentViewDate} onPrevMonth={handlePrevMonth} onNextMonth={handleNextMonth} />
            <Weekdays />
            <CalendarGrid
                weeks={getWeeksInMonth(currentViewDate)} // Assuming you have a function to get weeks in a month
                events={dummyEvents}
                selectedDate={new Date()} // Assuming you want to select today's date
                onDateSelect={(date: Date) => console.log('Selected date:', date.toLocaleDateString())} // Dummy date selection handler
            />
        </Box>
    );
};

export default Calendar;
