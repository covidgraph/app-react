# Covid Graph React Application

[![Netlify Status](https://api.netlify.com/api/v1/badges/64070b41-e60e-4070-9101-c080bed66740/deploy-status)](https://app.netlify.com/sites/covid-graph-react-client/deploys)

This is a front end application for the Covid Graph database utilizing React, Typescript, and GraphQL.

The goal is to be a simple tabular based interface for the whole of the Covid Graph data. It will 
hopefully serve as a basis for more specific frontend applications (e.g. a Patent focused application).

It was originally generated as a Typescript & React frontend in [GRANDstack.io](https://grandstack.io/).

## Deployment

The main branch is deployment is available at [https://covid-graph-react-client.netlify.app/](https://covid-graph-react-client.netlify.app/)

## Development

The application depends on the the [Covid Graph GraphQL API](https://github.com/covidgraph/graphql-api). 
By default the application tries the endpoint: `http://localhost:4001/graphql`.

```shell
npm install
npm run start
```

If you would like to define a different API endpoint use the `REACT_APP_GRAPHQL_URI` environment variable, 
for example:

```shell
REACT_APP_GRAPHQL_URI=https://graphql-api.covidgraph.vercel.app/graphql npm run start
```

### Type generation

The GraphQL entities are mapped to Typescript via an auto generated deceleration 
[file](/src/generated/graphql.tsx) (from [GraphQL Code Generator](https://graphql-code-generator.com/)).

To recreate the deceleration file, ensure you have the correct GraphQL endpoint set in the 
[codegen.yml file](codegen.yml) and run:

```shell 
npx graphql-codegen
```