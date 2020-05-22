import React, { Component, Fragment } from "react";
import { Card, CardBody, Button } from "reactstrap";
// import "@fortawesome/fontawesome-free/css";

class EditDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "0x1b53a6e8d57a343de37c09833fec13f8a7fdc3b2",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    console.log("Hello");
  };
  render() {
    // console.log(this.props.account);
    // console.log(this.state.account);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-2">
            {this.props.account === this.state.account ? (
              <EditCandidates
                props={this.props}
                handleClick={this.handleClick}
              />
            ) : (
              <h1>You are not authorized to edit the details</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const EditCandidates = (props) => {
  // console.log(props.props);
  return (
    <Fragment>
      <h1>Edit Candidates</h1>
      <h2>VP</h2>
      <Candidates candidates={props.props.VP} handleClick={props.handleClick} />
      <h2>GS</h2>
      <Candidates candidates={props.props.GS} handleClick={props.handleClick} />
      <h2>CS</h2>
      <Candidates candidates={props.props.CS} handleClick={props.handleClick} />
      <h2>SS</h2>
      <Candidates candidates={props.props.SS} handleClick={props.handleClick} />
    </Fragment>
  );
};

const Candidates = (props) =>
  props.candidates.map((candidate) => (
    <Card>
      <CardBody className="text-left">
        <div className="container">
          <div className="row">
            <h4 className="col-6">{candidate.name}</h4>
            <div className="col-6 text-right">
              <Button outline color="secondary" onClick={props.handleClick}>
                <i className="fas fa-times-circle"></i>
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  ));
//   // <h1>Hi</h1>
export default EditDetails;
