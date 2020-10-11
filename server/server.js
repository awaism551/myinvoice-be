"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var express = require('express');
var _a = require('apollo-server-express'), ApolloServer = _a.ApolloServer, gql = _a.gql;
// Construct a schema, using GraphQL schema language
var typeDefs = gql(__makeTemplateObject(["\n\ttype Query {\n\t\thello: String\n\t}\n"], ["\n\ttype Query {\n\t\thello: String\n\t}\n"]));
// Provide resolver functions for your schema fields
var resolvers = {
    Query: {
        hello: function () { return 'Hello world!'; },
    },
};
var server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
var app = express();
server.applyMiddleware({ app: app });
var port = 3003;
app.listen({ port: port }, function () {
    console.log("\uD83D\uDE80 Server ready at http://localhost:" + port + server.graphqlPath);
});
