import "./App.css";
import React, { Component } from "react";

import Header from "./Component/Header";
import News from "./Component/News";
import ReactPaginate from "react-paginate";
import DetailPage from "./Component/DetailPage";
import { Routes, Route } from "react-router-dom";

class pageContorl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      modelDetail: [],
      model: { language: "tr", page: 1, exchange: 1 },
    };
    this.getDetailPage = this.getDetailPage.bind(this);
  }
  componentDidMount() {
    this.getNews();
  }

  getNews() {
    const model = this.state.model;

    console.log("çalışıyor");
    fetch("https://rest.ihh.org.tr/news", {
      method: "POST",
      body: JSON.stringify(model),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((responsive) => responsive.json())
      .then((data) => this.setState({ news: data.list }));
  }
  async changeLanguageTR() {
    await this.setState({ model: { ...this.state.model, language: "tr" } });
    this.getNews();
    console.log(this.state.model.language);
  }
  async changeLanguageAR() {
    await this.setState({ model: { ...this.state.model, language: "ar" } });
    this.getNews();
    console.log(this.state.model.language);
  }
  async changeLanguageEN() {
    await this.setState({ model: { ...this.state.model, language: "en" } });
    this.getNews();
    console.log(this.state.model.language);
  }

  async getDetailPage(news) {
    await this.setState({ modelDetail: news.URL });
    console.log(this.state.modelDetail);
    console.log(news.URL);
  }

  render() {
    const handlePageClick = async (data) => {
      const pageNumber = data.selected + 1;
      await this.setState({
        model: { ...this.state.model, page: pageNumber },
      });
      this.getNews();
      console.log(pageNumber);
      console.log(this.state.model.page);
    };
    return (
      <div>
        <Header
          news={this.state.news}
          changeLanguageTR={() => this.changeLanguageTR()}
          changeLanguageAR={() => this.changeLanguageAR()}
          changeLanguageEN={() => this.changeLanguageEN()}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <News
                  news={this.state.news}
                  getDetailPage={this.getDetailPage}
                />
                <ReactPaginate
                  previousLabel={"<<"}
                  nextLabel={">>"}
                  breakLabel={"..."}
                  pageCount={308}
                  onPageChange={handlePageClick}
                  containerClassName={"paginate"}
                  pageClassName={"page-item"}
                  previousClassName={"page-item"}
                  nextClassName={"page-item"}
                />
              </>
            }
          />

          <Route
            path="/DetailPage"
            element={
              <DetailPage
                state={this.state.model}
                getDetailPage={this.getDetailPage}
                modelDetail={this.state.modelDetail}
                changeLanguageTR={() => this.changeLanguageTR()}
                changeLanguageAR={() => this.changeLanguageAR()}
                changeLanguageEN={() => this.changeLanguageEN()}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default pageContorl;
