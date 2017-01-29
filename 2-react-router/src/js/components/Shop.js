import React from "react";
import { Link } from "react-router";

export default class Shop extends React.Component {
  render() {
    const { title, id } = this.props;
	console.log(this.props);
    return (
      <div class="col-md-4">
        <h4>Shop {title} {id}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <a class="btn btn-default" href="#">More Info</a>
		<Link to="shops">More Info</Link>
      </div>
    );
  }
}
