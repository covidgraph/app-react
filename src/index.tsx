import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import './index.css';

const uri =
  process.env.REACT_APP_GRAPHQL_URI || "http://localhost:4001/graphql";
const cache = new InMemoryCache();

const client = new ApolloClient({
  uri,
  cache,
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </StrictMode>,
  document.getElementById("root")
);

