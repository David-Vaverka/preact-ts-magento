import { Component, h } from "preact";
import { getCategory } from "../../fetch/category";
import { Link } from "preact-router/match";
import { GQLCategoryItem } from "../../fetch/category/type";
import style from "./style.css";

type CategoryState = {
  categoryList: GQLCategoryItem[];
};

type CategoryProps = {
  url: string;
};

export default class Category extends Component<CategoryProps, CategoryState> {
  async componentWillMount() {
    const category = await getCategory();

    this.setState({ categoryList: category.items });
  }

  categoryItem(categoryItem: GQLCategoryItem) {
    return categoryItem.children.map((category) => (
      <Link
        class={style.categoryItem}
        key={category.id}
        activeClassName="active"
        href={`/list/${category.id}`}
      >
        <div>{category.name}</div>
      </Link>
    ));
  }

  render() {
    const { categoryList } = this.state;

    return (
      <div>
        {categoryList &&
          categoryList.map((category) => (
            <div key={category.id}>
              <div>{category.name}</div>
              <div>{this.categoryItem(category)}</div>
            </div>
          ))}
      </div>
    );
  }
}
