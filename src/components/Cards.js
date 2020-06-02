import React from "react";
import "./Cards.css";
import Dialog from "react-bootstrap-dialog";
import { Button } from "react-bootstrap";

class Cards extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.dialog.showAlert("You are lucky!");
  }
  render() {
    return (
      <div className="card text-center shadow">
        <div className="overflow">
          <img src={this.props.source} alt="" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{this.props.title}</h4>
          <Button variant="primary" onClick={this.onClick}>
            Check this place
          </Button>
          <Dialog
            ref={(component) => {
              this.dialog = component;
            }}
          />
        </div>
      </div>
    );
  }
}
export default Cards;
