import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import background from './image.jpg'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        margin: "0 auto",
        textAlign: "center",
        alignItems: "center",
        color: "white",
    },
    divs: {
        display: "flex",
    },
});

export default function FixedContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed >
                <h1 style={{ margin: '13px' }}>Только у нас эксклюзивы</h1>
                <Typography component="div" style={{
                    backgroundImage: `url("${background}")`,
                    width: "auto",
                    height: "90vh",
                    backgroundSize: "100%",
                    // justifyContent: 'start',
                    backgroundRepeat: "no-repeat",
                }} />
            </Container>
        </React.Fragment>
    );
}
