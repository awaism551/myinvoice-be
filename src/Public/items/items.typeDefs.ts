import gql from 'graphql-tag';

export const typeDef = gql`
  extend type Query {
    items: [Item]
    item(itemId: ID!): Item
  }

  extend type Mutation {
    createItem(name: String!): Item
    updateItem(itemId: ID!, name: String!): Item
    deleteItem(itemId: ID!): Boolean
  }

  type Item {
    id: ID!
    name: String!
  }
`;
