import { makeStyles } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { clientContext } from "../../../contexts/ClientContext";
import Card from "../Card/Card";

const useStyles = makeStyles({
  divs: {
    display: "flex",
    flexWrap: "wrap",
  },
  titleTwo: {
    textAlign: "center",
  },
});

const AllProducts = () => {
  const { products, getProducts } = useContext(clientContext);
  const classes = useStyles();
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <h2 className={classes.titleTwo}>Все товары</h2>
      <div className={classes.divs}>
        {products ? (
          products.map((product) => <Card key={product.id} product={product} />)
        ) : (
          <h2>Товаров нет в наличии</h2>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
