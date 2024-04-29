"use client"
import * as React from 'react';
import {
    Box,
    Typography,
    Grid,
    Paper,
    Button,
    IconButton,
    Chip,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import IssueCard from '../components/IssueCard';

// interface BacklogProps {
//     issues: {
//         id: number;
//         title: string;
//         epic: string;
//         status: string;
//     }[];
// }


const Backlog = () => {
    let backlogData: {
        id: number;
        title: string;
        epic: string;
        status: string;
        priority?: number; // Optional property for priority
        description?: string; // Optional property for description
    }[];

    backlogData = [
        {
            id: 1,
            title: 'Implement user authentication',
            epic: 'Core Functionality',
            status: 'To Do',
            priority: 1, // High priority
            description: 'Users should be able to register, login, and logout of the application.',
        },
        {
            id: 2,
            title: 'Design user interface for task management',
            epic: 'User Interface',
            status: 'In Progress',
            priority: 2, // Medium priority
            description: 'Users should be able to register, login, and logout of the application.',
        },
        {
            id: 3,
            title: 'Develop API endpoints for fetching and creating tasks',
            epic: 'Backend Development',
            status: 'To Do',
            priority: 1, // High priority
            description: 'Users should be able to register, login, and logout of the application.',
        },
        {
            id: 4,
            title: 'Write unit tests for user authentication',
            epic: 'Testing',
            status: 'Code Review',
            priority: 3, // Low priority
            description: 'Users should be able to register, login, and logout of the application.',
        },
        {
            id: 5,
            title: 'Deploy application to production server',
            epic: 'Deployment',
            status: 'Waiting for Review',
            priority: 2, // Medium priority
        },
        // ... add more dummy data entries here
    ];
    return (
        <Box sx={{ padding: (theme) => theme.spacing(2) }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Backlog ({backlogData.length} issues)
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton>
                            <FilterListIcon />
                        </IconButton>
                    </Box>
                </Grid>
                {backlogData.map((issue) => (
                    <IssueCard issue={issue} />
                ))}
            </Grid >
        </Box >
    );
};

export default Backlog;
