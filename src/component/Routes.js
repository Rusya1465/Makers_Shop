import Container from './Header/Container';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './Header/Navbar';
import Card from './Home/Card/Card'
import Footer from './Home/Footer/Footer'
import Bigcard from './Home/Content/Bigcard'

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Container />
            <Card />
            <Bigcard />
            <Switch>

            </Switch>
            <Footer />

        </BrowserRouter>
    );
};

export default Routes;