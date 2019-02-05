import React, { Component } from "react";
import "./App.css";
import { withBookstoreService } from "../hoc";

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());

  return <div>App</div>;
};

export default withBookstoreService()(App);
