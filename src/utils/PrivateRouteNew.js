import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import MainComponents from "../components/MainComponents";
import AuthHandler from "./AuthHandler";

export var PrivateRouteNew = ({ page, activepage, ...rest }) => {

  return (
    <Route
    {...rest}
      render={() =>
        AuthHandler.loggedIn() ? (
        <MainComponents page={page} activepage={activepage} />
        ) : (
        <Redirect to="/" />
        )
      }
    />
  );
};
