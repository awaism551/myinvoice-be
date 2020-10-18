import gql from 'graphql-tag';

export const typeDef = gql`
  extend type Query {
    itemCategories: [ItemCategory]
    itemCategory(itemCategoryId: ID!): ItemCategory
  }

  type ItemCategory {
    id: ID!
    title: String!
  }
`;
