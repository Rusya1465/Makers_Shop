import React from "react";
import Container from "../Header/Container";
import Navbar from "../Header/Navbar";
import Card from '../Content/Card'

const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container />
      <Card />
    </React.Fragment>
  );
};

export default HomePage;
