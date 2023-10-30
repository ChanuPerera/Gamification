import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const Loader = ({ loading }) => {

    return (
        <Backdrop
            sx={{
                color: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            open={loading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>

    );

}

export default Loader;