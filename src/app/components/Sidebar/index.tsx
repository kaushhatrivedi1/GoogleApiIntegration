"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation';
import { Accordion, AccordionDetails, AccordionSummary, Collapse, Toolbar, Typography } from '@mui/material';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '@/redux-store/store';
import { toggleSidebar } from '@/redux-store/reducers/global/globalStates';

const Sidebar = () => {
    const drawerWidth = 240;
    const { sidebarState } = useAppSelector((state) => state.global)
    const dispatch = useAppDispatch();
    const router = useRouter();
    const handleAccordionClick = () => {
        dispatch(toggleSidebar(true)); // Close the sidebar when AccordionSummary is clicked
    };
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const DrawerList = (
        <Box sx={{ overflow: 'auto' }}>
            <List>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Board" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {['Timeline', 'Backlog', 'Activesprint'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={() => {
                                    router.push(`/${text}`);
                                }}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>))}
                    </List>
                </Collapse>
                {/* <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon onClick={handleAccordionClick} />}>
                        <Typography variant="subtitle1">Board</Typography>
                    </AccordionSummary>


                    <AccordionDetails>

                        {['Timeline', 'Backlog', 'Activesprint'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={() => {
                                    router.push(`/${text}`);
                                }}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>))}
                    </AccordionDetails>
                </Accordion> */}
                {['Calendar', 'Chat', 'help'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => {
                            router.push(`/${text}`);
                        }}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Box >

    );

    return (
        <Drawer open={sidebarState} onClose={() => dispatch(toggleSidebar(false))} sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}> <Toolbar />
            {DrawerList}
        </Drawer>

    );
}
export default Sidebar;