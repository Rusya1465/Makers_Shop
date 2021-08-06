import React from "react";
import Container from "../Header/Container";
import Navbar from "../Header/Navbar";
import Footer from "./footer";

const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
