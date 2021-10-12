import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import {AppBar, Box, Container, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function JSAbout() {
    return (
        <Grid container item sx={{height: '100vh'}} style={{backgroundColor: '#282a36', color: 'white', alignItems: 'center'}} id='about' >
            <div>About Me</div>
        </Grid>
    );
}
