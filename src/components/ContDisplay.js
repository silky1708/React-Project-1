import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import Cards from "./Cards";
import "./Cards.css";

class ContDisplay extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="outer">
          <div className="row">
            <h1>Which place you want to go to?</h1>
          </div>
        </div>

        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <Cards source={img1} title="Puerto Rico"></Cards>
            </div>
            <div className="col-md-4">
              <Cards source={img2} title="Bucharest"></Cards>
            </div>
            <div className="col-md-4">
              <Cards source={img3} title="Hawaii"></Cards>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ContDisplay;
