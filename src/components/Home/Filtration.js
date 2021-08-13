import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { clientContext } from "../../contexts/ClientContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: "flex",
  },
}));

const Filtration = () => {
  const classes = useStyles();
  const { getProducts } = useContext(clientContext);
  const history = useHistory();

  function fetchProducts(params, value) {
    let search = new URLSearchParams(history.location.search);
    search.set(params, value);
    let url = `${history.location.pathname}?${search.toString()}`;
    history.push(url);
    getProducts(history);
  }

  function reset() {
    history.push("/products-page");
    getProducts(history);
    
  }
  return (
    <Grid item md={3}>
      <Paper className={classes.paper}>
        <div>
          <Grid>
            <FormControl component="fieldset">
              <FormLabel component="legend">Цена</FormLabel>
              <RadioGroup
                onChange={(e) => fetchProducts("price_lte", e.target.value)}
                aria-label="price"
                name="price1"
              >
                <FormControlLabel
                  value="10000"
                  control={<Radio />}
                  label="10000"
                />
                <FormControlLabel
                  value="15000"
                  control={<Radio />}
                  label="15000"
                />
                <FormControlLabel
                  value="25000"
                  control={<Radio />}
                  label="25000"
                />
                <FormControlLabel
                  value="40000"
                  control={<Radio />}
                  label="40000"
                />
                <FormControlLabel
                  value="100000"
                  control={<Radio />}
                  label="100000"
                />
                <FormControlLabel
                  value="60000"
                  control={<Radio />}
                  label="60000"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </div>
        <div>
          <Grid>
            <FormControl component="fieldset">
              <FormLabel component="legend">Бренды</FormLabel>
              <RadioGroup
                onChange={(e) => fetchProducts("brand", e.target.value)}
                aria-label="brand"
                name="brand1"
              >
                <FormControlLabel
                  value="Adidas"
                  control={<Radio />}
                  label="Adidas"
                />
                <FormControlLabel
                  value="Nike"
                  control={<Radio />}
                  label="Nike"
                />
                <FormControlLabel
                  value="Reebok"
                  control={<Radio />}
                  label="Reebok"
                />
                <FormControlLabel
                  value="Lacoste"
                  control={<Radio />}
                  label="Lacoste"
                />
                <FormControlLabel
                  value="100000"
                  control={<Radio />}
                  label="100000"
                />
                <FormControlLabel
                  value="60000"
                  control={<Radio />}
                  label="60000"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </div>

        <button onClick={reset}>RESET</button>
      </Paper>
    </Grid>
  );
};

export default Filtration;
