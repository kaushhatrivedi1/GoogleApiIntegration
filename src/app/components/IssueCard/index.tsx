import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    Paper,
    Typography,
    Chip,
    Button,
    Box,
    Grid,
    IconButton,
    Divider,
    Stack,
} from '@mui/material';

interface Issue {
    id: number;
    title: string;
    epic: string;
    status: string;
    priority?: number;
    description?: string;
}

const IssueCard: React.FC<{ issue: Issue }> = ({ issue }) => {
    const [showDescription, setShowDescription] = useState(false);

    const handleViewClick = () => {
        setShowDescription(!showDescription);
    };

    const getPriorityColor = (priority: number | undefined): string => {
        if (priority === undefined) return ''; // Default color or no priority
        if (priority < 3) return 'green'; // Low priority
        if (priority < 6) return 'blue'; // Medium priority
        return 'red'; // High priority
    };

    return (
        <Grid item xs={12} key={issue.id}>
            <Paper sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body1">{issue.title}</Typography>
                        <IconButton onClick={handleViewClick}>
                            <MoreVertIcon />
                        </IconButton>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Chip label={issue.epic} variant="outlined" size="small" />
                        <Chip label={issue.status} variant="outlined" size="small" />
                        {issue.priority && (
                            <Chip
                                label={`Priority: ${issue.priority}`}
                                variant="outlined"
                                size="small"
                                style={{ color: getPriorityColor(issue.priority) }}
                            />
                        )}
                    </Stack>
                    <Divider sx={{ my: 1 }} />
                    {showDescription && issue.description && (
                        <Typography variant="body2">{issue.description}</Typography>
                    )}
                </Box>
                <Button variant="text" onClick={handleViewClick}>
                    {showDescription ? 'Hide' : 'View'}
                </Button>
            </Paper>
        </Grid>
    );
};

export default IssueCard;
