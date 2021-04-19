import React, { Component } from "react";
import HeaderNav from "./components/HeaderNav";
import LeftNav from "./components/LeftNav";
import RightNav from "./components/RightNav";
import MainBody from "./components/MainBody";
import "./contents/App.css"
import reactDom from "react-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-12">
            <HeaderNav />
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-sm-3">
            <RightNav />
          </div>
          <div className="col-sm-6">
            <MainBody />
          </div>
          <div className="col-sm-3">
          <LeftNav />

          </div>
        </div>

        
      </React.Fragment>
    );
  }
}

export default App;
