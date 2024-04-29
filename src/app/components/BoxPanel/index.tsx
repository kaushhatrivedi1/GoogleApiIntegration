import React from 'react';
import { Box } from '@mui/material';

interface BoxPanelProps {
    title: string;
    items: string[];
}

const BoxPanel: React.FC<BoxPanelProps> = ({ title, items }) => {
    return (
        <Box className='w-full bg-gray-300 h-full p-4 border rounded'>
            <h2>{title}</h2>
            <div className="flex flex-wrap mt-4 gap-y-2">
                {items.map((item, index) => (
                    <div key={index} className="w-full bg-gray-200 p-4 border rounded">{item}</div>
                ))}
            </div>
        </Box >
    );
};

export default BoxPanel;
