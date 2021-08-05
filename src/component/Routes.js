import Container from './Header/Container';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './Header/Navbar';
import Card from './Home/Card/Card'
import Footer from './Home/Footer/Footer'


const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Container />
            <Card />

            <Switch>

            </Switch>
            {/* <Footer /> */}

        </BrowserRouter>
    );
};

export default Routes;