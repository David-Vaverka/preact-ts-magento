import { GraphQLClient } from "graphql-request";

// todo set to env
const URL = "https://venia.magento.com/graphql";

// todo use native fetch
export const graphQLClient = new GraphQLClient(URL, {
  method: "GET",
  jsonSerializer: {
    parse: JSON.parse,
    stringify: JSON.stringify,
  },
});
