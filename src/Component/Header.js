import React, { Component } from "react";
import logo from "../img/ihh-logo.png";
import flag_tr from "../img/Flag_of_Turkey.png";
import flag_ar from "../img/Flag_of_Saudi_Arabia.png";
import flag_en from "../img/Flag_of_the_United_Kingdom.png";

class Header extends Component {
  changeLanguageTR() {
    const h1 = document.getElementById("h1");
    this.props.changeLanguageTR();
    h1.innerHTML = "İHH HABER PORTALI";
    console.log("dinliyor");
  }
  changeLanguageAR() {
    const h1 = document.getElementById("h1");
    this.props.changeLanguageAR();
    h1.innerHTML = "بوابة أخبار IHH";
    console.log("dinliyor");
  }
  changeLanguageEN() {
    const h1 = document.getElementById("h1");
    this.props.changeLanguageEN();
    h1.innerHTML = "İHH NEWS PORTAL";
    console.log("dinliyor");
  }

  getRight() {
    var item = document.getElementsByClassName("news-content-link")[0];
    item.style = "display:none;";
  }

  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <img onClick={() => this.useNews()} src={logo} alt="new" />
        </div>

        <div className="header-title">
          <h1 id="h1">İHH HABER PORTALI</h1>
        </div>
        <div className="header-select">
          <div
            className="header-select-item"
            onClick={() => this.changeLanguageTR()}
          >
            <img src={flag_tr} alt="nice" />
          </div>
          <div
            className="header-select-item"
            onClick={() => this.changeLanguageAR()}
            onMouseUp={() => {
              this.getRight();
            }}
          >
            <img src={flag_ar} alt="nice" />
          </div>
          <div
            className="header-select-item"
            onClick={() => this.changeLanguageEN()}
          >
            <img src={flag_en} alt="nice" />
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
