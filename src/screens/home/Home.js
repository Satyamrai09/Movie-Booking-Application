import React, { Component } from "react";
import Header from "../../common/header/Header";
import MoviesData from "../../common/MoviesData";
import SingleImageList from "../../screens/SingleImageList";
import RegularImageList from "../RegularImageList"
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      MoviesData: MoviesData,
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div className="headerBar">
          <span className="headerText">Upcoming Movies</span>
        </div>
        <SingleImageList MoviesData={this.state.MoviesData} />
        <div className="flex-container">
          <div className="left">
            <a href=""><RegularImageList MoviesData={this.state.MoviesData} /></a>
          </div>
          <div className="right">
           
          </div>
        </div>
      </div>
    );
  }
}
