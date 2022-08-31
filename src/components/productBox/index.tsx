import { h } from "preact";
import { GetProductItem } from "../../fetch/product/type";

export const ProductBox = (product: GetProductItem) => (
  <a>
    <div key={product.id}>
      <div>{product.name}</div>
      <div>
        <img
          src={product.image.url}
          width="500"
          height="600"
          alt={product.name}
        />
      </div>
    </div>
  </a>
);
