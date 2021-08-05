import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import background from './back.jpg'


export default function SimpleContainer() {
    return (
        <>
            <CssBaseline />

            <Typography component="div" style={{ backgroundImage: `url("${background}")`, width: '100vw', height: '80vh', backgroundSize: '100%', padding: ' 10px', backgroundRepeat: 'no-repeat' }} />

            {/* <Container maxwidth="lg">
                <h1>This is Container</h1>
            </Container> */}
            <h1 style={{ textAlign: 'center' }}>Каталог товаров</h1>



        </>



    );
}
