import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    const Categories = [
		"Category 1",
		"Category 1",
		"Category 1",
		"Category 1",
		"Category 1",
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
      <div>
        <h1>Categories</h1>
        article: {article}, date: {date}, filter: {filter}
        <div class="row">{Categories}</div>
      </div>
    );
  }
}
