import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import background from "./back.jpg";
import { makeStyles } from "@material-ui/core";
import Card from "../Home/Card/Card";
import { useContext } from "react";
import { clientContext } from "../../contexts/ClientContext";
import { Carousel } from "react-bootstrap";
import SliderHead from "./SliderHead";
const useStyles = makeStyles({
  container: {
    margin: "0 auto",
    textAlign: "center",
    alignItems: "center",
    color: "white",
  },
  divs: {
    display: "flex",
    flexWrap: "wrap",
  },
});

export default function SimpleContainer() {
  const { products, getProducts } = useContext(clientContext);
  useEffect(() => {
    getProducts();
  }, []);
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container className={classes.container} maxwidth="lg">
        <h1 style={{ color: "black" }}>Новинки этого месяца</h1>
      </Container>
      <SliderHead />
      {/* <Typography
        component="div"
        style={{
          backgroundImage: `url("${background}")`,
          width: "auto",
          height: "80vh",
          backgroundSize: "100%",
          padding: " 10px",
          backgroundRepeat: "no-repeat",
        }}
      ></Typography> */}

      <h1 style={{ textAlign: "center" }}>Каталог товаров</h1>
      <div className={classes.divs}>
        {products ? (
          products.map((product) => <Card key={product.id} product={product} />)
        ) : (
          <h2>Товара нет в наличии</h2>
        )}
      </div>
    </>
  );
}
