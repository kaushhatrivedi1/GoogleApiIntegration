"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from '@/redux-store/store';
import { toggleSidebar } from '@/redux-store/reducers/global/globalStates';




export default function Appbar() {
    const dispatch = useAppDispatch();
    const { sidebarState } = useAppSelector((state) => state.global)
    const handleToggleClick = () => {
        // Dispatch an action to toggle the sidebar state

        dispatch(toggleSidebar(!sidebarState));
    };
    return (

        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton
                    onClick={handleToggleClick}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}

                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Dashboard
                </Typography>
                <Button color="inherit" onClick={() => console.log("hi")}>Login</Button>

            </Toolbar>
        </AppBar>

    );
}
