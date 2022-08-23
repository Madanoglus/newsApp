import React, { Component } from "react";
import { Item } from "./BackButton.js";

export default class DetailPage extends Component {
  state = {
    detailnews: [],
  };

  componentDidMount() {
    this.getDetailNews();
  }

  async getDetailNews() {
    const model = this.props.state.language;
    var url = this.props.modelDetail;
    console.log("çalışıyor");
    await fetch(`https://rest.ihh.org.tr/news/${url}`, {
      method: "POST",
      body: JSON.stringify({ language: model, exchange: 1 }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((responsive) => responsive.json())
      .then((data) => this.setState({ detailnews: data }));
    console.log(this.state.detailnews);
  }

  render() {
    const myElement = <>{this.state.detailnews.Content}</>;
    return (
      <div className="detail-page">
        <div>
          <Item />
        </div>
        <div className="detail-page-scroll">
          <div className="detail-page-header">{this.state.detailnews.Header}</div>
          <div>{myElement}</div>
          `${this.state.detailnews.Content}`
          <img src="/public/news/4/4833/12770/pre_431639695993.jpg" alt="" />
        </div>
      </div>
    );
  }
}
