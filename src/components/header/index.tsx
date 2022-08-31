import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header = () => (
  <header class={style.header}>
    <nav>
      <h1>Magento shop</h1>
      <Link activeClassName={style.active} href="/">
        Homepage
      </Link>
      <Link activeClassName={style.active} href="/category">
        Category
      </Link>
    </nav>
  </header>
);

export default Header;
