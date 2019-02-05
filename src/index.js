import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App/App";
import ErrorBoundry from "./components/ErrorBoundry";
import BookstoreService from "./services/bookstore-service";
import { BookstoreProvider } from "./components/BookstoreServiceContext";
import store from "./store";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
