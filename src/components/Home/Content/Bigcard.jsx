import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function FixedContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography component="div" style={{ background: (''), height: '90vh', width: '110vh' }} />
                <h1>Только у нас эксклюзивы</h1>

            </Container>
        </React.Fragment>
    );
}
