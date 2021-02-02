import gql from 'graphql-tag';

export const typeDef = gql`
  extend type Query {
    itemCategories: [ItemCategory]
    itemCategory(itemCategoryId: ID!): ItemCategory
  }

  extend type Mutation {
    createItemCategory(title: String!): ItemCategory
    updateItemCategory(itemCategoryId: ID!, title: String!): ItemCategory
    deleteItemCategory(itemCategoryId: ID!): Boolean
  }

  type ItemCategory {
    id: ID!
    title: String!
  }
`;
