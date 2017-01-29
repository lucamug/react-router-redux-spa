import React from "react";

import Shop from "../components/Shop";

export default class Archives extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    const Categories = [
		"Shop 1",
		"Shop 2",
		"Shop 3",
		"Shop 4",
		"Shop 5",
    ].map((title, i) => <Shop key={i} title={title} id={i} /> );

    return (
      <div>
        <h1>Shops</h1>
        article: {article}, date: {date}, filter: {filter}
        <div class="row">{Categories}</div>
      </div>
    );
  }
}
