import { h } from "preact";
import ListProduct from "../src/routes/listProduct";

import * as fetchProduct from "../src/fetch/product";
import { mockDataProductItems } from "./mockData/productItems";
import { awaitRenderComponent } from "./tools/awaitRenderComponent";

describe("Initial Test of the productList", () => {

  test("should see name and picture", async () => {
    const mockGetUsers = jest.spyOn(fetchProduct, "getProduct");
    mockGetUsers.mockResolvedValue(mockDataProductItems);

    const component = await awaitRenderComponent(
      <ListProduct categoryId={"27"} />
    );

    await component.findByText(mockDataProductItems["items"][0].name);
    await component.findByText(mockDataProductItems["items"][2].name);

    // todo check count element and image
  });
});
