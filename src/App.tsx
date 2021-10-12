import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import {AppBar, Box, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import JSNavigation from "./JSNavigation";
import JSHome from "./JSHome";
import { styled } from '@mui/material/styles';
import JSContact from "./JSContact";
import JSAbout from "./JSAbout";
import JSBlog from "./JSBlog";
import JSProjects from "./JSProjects";

export default function App() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <JSNavigation></JSNavigation>
            <Grid container direction="column">
                <JSHome/>
                <JSAbout/>
                <JSProjects/>
                <JSBlog/>
                <JSContact/>
            </Grid>

        </Box>
    );
}
