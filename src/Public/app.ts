import { itemCategories } from './item-categories';
import { items } from './items';

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDef = gql`
  type Query
  type Mutation
`;

// Provide resolver functions for your schema fields
const resolvers = [itemCategories.resolvers, items.resolvers];

const typeDefs = [typeDef, itemCategories.typeDef, items.typeDef];

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });
const port = 3003;

app.listen({ port }, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`,
  );
});
