import { h } from "preact";
import { Route, Router } from "preact-router";

import Header from "./header";
import Home from "../routes/home";
import Category from "../routes/category";
import ListProduct from "../routes/listProduct";

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Route path="/" component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/list/:categoryId" component={ListProduct} />
    </Router>
  </div>
);

export default App;
