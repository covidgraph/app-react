import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

const uri =
  process.env.REACT_APP_GRAPHQL_URI || "http://localhost:4001/graphql";
const cache = new InMemoryCache();

const client = new ApolloClient({
  uri,
  cache,
});

const theme = createMuiTheme({
  typography: {
    h4: {
      fontSize: "1.2rem",
    },
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
