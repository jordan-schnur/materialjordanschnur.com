import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import {AppBar, Box, Container, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function JSNavigation() {
    return (
        <React.Fragment>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Jordan Schnur
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Projects</Button>
                    <Button color="inherit">Blog</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
