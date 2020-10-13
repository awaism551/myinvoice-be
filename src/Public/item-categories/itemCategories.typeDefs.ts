import gql from 'graphql-tag';

export const typeDef = gql`
  extend type Query {
    itemCategories: String
  }
`;
