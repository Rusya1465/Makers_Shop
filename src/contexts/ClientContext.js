import axios from "axios";
import React, { useReducer } from "react";
import { JSON_API } from "../helpers/constants";

export const clientContext = React.createContext();

const INIT_STATE = {
  products: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload.data };
    default:
      return state;
  }
};


const ClientContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);


  const getProducts = async (history) => {
    const search = new URLSearchParams(history.location.search)
    search.set('_limit', 6)
    history.push(`${history.location.pathname}?${search.toString()}`)
    const res = await axios(`${JSON_API}/products-page${window.location.search}`)
    dispatch({
      type: "GET_PRODUCTS",
      payload: res,
    });
  };


  return (
    <clientContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {children}
    </clientContext.Provider>
  );
};

export default ClientContextProvider;
