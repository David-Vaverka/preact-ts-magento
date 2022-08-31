import { gql } from "graphql-request";
import { graphQLClient } from "../client";
import { GQLCategory } from "./type";

const getGqlCategoryForList = gql`
  query getCategoryForList {
    categories {
      items {
        id
        children {
          id
          name
        }
      }
    }
  }
`;

export async function getCategory() {
  const data = await graphQLClient.request<{ categories: GQLCategory }>(
    getGqlCategoryForList
  );
  return data.categories;
}
