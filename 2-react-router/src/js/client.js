import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

// import Archives from "./pages/Archives";
import Pages from "./pages/Pages";
import Shops from "./pages/Shops";
import Categories from "./pages/Categories";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
	  <Route path="shops(/:id)" name="shops" component={Shops}></Route>
	  <Route path="categories(/:id)" name="categories" component={Categories}></Route>
	  <Route path="pages(/:id)" name="pages" component={Pages}></Route>
    </Route>
  </Router>,
app);
