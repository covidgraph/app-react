import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
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
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>,
  document.getElementById("root")
);

