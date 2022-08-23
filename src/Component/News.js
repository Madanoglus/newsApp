import React, { Component } from "react";
import { Link } from "react-router-dom";


class News extends Component {
  hideSelect() {
    var select = document.getElementsByClassName("header-select")[0];
    select.style = "visibility: hidden;";
  }
  render() {
    return (
      <div className="news">
        <div className="news-content">
          {this.props.news.map((news) => (
            <div className="news-content-link">
              <Link style={{ textDecoration: "none" }} to="/DetailPage">
                <ul
                  onClick={() => {
                    this.props.getDetailPage(news);
                    this.hideSelect();
                  }}
                >
                  
                  <li className="news-content-link-header">{news.Header}</li>
                  <li className="news-content-link-spot">{news.Spot}</li>
                </ul>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;
