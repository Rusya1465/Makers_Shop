import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import HomePage from "./components/Home/HomePage";
import AdminContextProvider from "./contexts/AdminContext";
import ClientContextProvider from "./contexts/ClientContext";
import Footer from "./components/Footer/Footer";
import AllProducts from "./components/Home/AllProducts/AllProducts";
import Navbar from "./components/Header/Navbar";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import AuthContextProvider from "./contexts/AuthContext";
import PayForm from "./components/Cart/PayForm";

const Routes = () => {
  return (
    <AuthContextProvider>
      <ClientContextProvider>
        <AdminContextProvider>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/admin" component={AdminPanel} />
              <Route exact path="/products-page" component={AllProducts} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/pay-form" component={PayForm} />
            </Switch>
          </BrowserRouter>
          <Footer />
        </AdminContextProvider>
      </ClientContextProvider>
    </AuthContextProvider>
  );
};

export default Routes;
