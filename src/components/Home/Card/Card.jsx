import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import { clientContext } from "../../../contexts/ClientContext";
import { ShoppingCart } from "@material-ui/icons";
import "./card.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "50px",
  },
});

export default function ImgMediaCard({ product }) {
  const classes = useStyles();
  const { addAndDeleteProductInCart, checkProductInCart, getProductDetail } =
    useContext(clientContext);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={product.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="shoping_box">
        <Typography size="small" color="textSecondary">
          {product.price}{" "}
        </Typography>
        <IconButton
          onClick={() => addAndDeleteProductInCart(product)}
          variant="contained"
          color={checkProductInCart(product.id) ? "secondary" : "primary"}
        >
          <ShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}
