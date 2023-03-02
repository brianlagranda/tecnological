import React from "react"
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import "./spinner.css";


export default function Spinner() {
    return (
        <Box sx={{
            width: '80%', margin: '100px auto'
        }}>
            <LinearProgress />
        </Box>
    );
}
