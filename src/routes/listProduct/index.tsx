import { Component, h } from "preact";
import { getProduct } from "../../fetch/product";
import { GetProduct } from "../../fetch/product/type";
import { ProductBox } from "../../components/productBox";
import style from "./style.css";

type ListProductProps = {
  categoryId: string;
};

type ListProductState = {
  products?: GetProduct["items"];
};

export default class ListProduct extends Component<
  ListProductProps,
  ListProductState
> {
  async componentWillMount() {
    const productList = await getProduct(this.props.categoryId);

    this.setState({ products: productList.items });
  }

  render() {
    const { products } = this.state;

    return (
      <div class={style.listProduct}>
        {products &&
          products.map((products) => (
            <ProductBox key={products.id} {...products} />
          ))}
      </div>
    );
  }
}
