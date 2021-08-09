import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import HomePage from "./components/Home/HomePage";
import AdminContextProvider from "./contexts/AdminContext";
import ClientContextProvider from "./contexts/ClientContext";
import Footer from "./components/Footer/Footer";
import AllProducts from "./components/Home/AllProducts/AllProducts";

const Routes = () => {
  return (
    <ClientContextProvider>
      <AdminContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/admin" component={AdminPanel} />
            <Route exact payh="products-page" component={AllProducts} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </AdminContextProvider>
    </ClientContextProvider>
  );
};

export default Routes;
