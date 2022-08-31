import { gql } from "graphql-request";
import { graphQLClient } from "../client";
import { GetProduct } from "./type";

const getGqlCategoryForList = gql`
  query getCategoryForList($categoryId: String!) {
    products(filter: { category_id: { eq: $categoryId } }) {
      items {
        id
        name
        image {
          url
        }
      }
    }
  }
`;

export async function getProduct(categoryId: string) {
  const variables = {
    categoryId,
  };

  const data = await graphQLClient.request<{ products: GetProduct }>(
    getGqlCategoryForList,
    variables
  );

  return data.products;
}
