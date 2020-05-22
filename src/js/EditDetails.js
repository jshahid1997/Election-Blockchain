import React, { Component, Fragment } from "react";
import {
  Card,
  CardBody,
  Button,
  CardHeader,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Row,
  Col,
  Input,
} from "reactstrap";
// import "@fortawesome/fontawesome-free/css";

class EditDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "0x1b53a6e8d57a343de37c09833fec13f8a7fdc3b2",
      isOpen: false,
      name: "",
      post: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick = (name, post) => {
    console.log(name, post);
    this.props.eth
      .removeCandidate(name, post, { from: this.props.account })
      .then((res) => console.log(res));
  };
  toggleModal = (post) => {
    this.setState({
      isOpen: !this.state.isOpen,
      post: post,
    });
  };
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  addCandidate = (post) => {
    console.log(this.state.name, this.state.post);
    this.props.eth
      .addCandidate(this.state.name, this.state.post, {
        from: this.props.account,
      })
      .then((res) => console.log(res));
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
                toggle={this.toggleModal}
                isOpen={this.state.isOpen}
                onChange={this.handleChange}
                addCandidate={this.addCandidate}
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
      <Candidates
        candidates={props.props.VP}
        handleClick={props.handleClick}
        post={"VP"}
        isOpen={props.isOpen}
        toggle={props.toggle}
        onChange={props.onChange}
        addCandidate={props.addCandidate}
      />
      <Card>
        <Button className="text-center" onClick={() => props.toggle("VP")}>
          Add Candidate
        </Button>
      </Card>
      <h2>GS</h2>
      <Candidates
        candidates={props.props.GS}
        handleClick={props.handleClick}
        post={"GS"}
        isOpen={props.isOpen}
        toggle={props.toggle}
        onChange={props.onChange}
        addCandidate={props.addCandidate}
      />
      <Card>
        <Button className="text-center" onClick={() => props.toggle("GS")}>
          Add Candidate
        </Button>
      </Card>
      <h2>CS</h2>
      <Candidates
        candidates={props.props.CS}
        handleClick={props.handleClick}
        post={"CS"}
        isOpen={props.isOpen}
        toggle={props.toggle}
        onChange={props.onChange}
        addCandidate={props.addCandidate}
      />
      <Card>
        <Button className="text-center" onClick={() => props.toggle("CS")}>
          Add Candidate
        </Button>
      </Card>
      <h2>SS</h2>
      <Candidates
        candidates={props.props.SS}
        handleClick={props.handleClick}
        post={"SS"}
        isOpen={props.isOpen}
        toggle={props.toggle}
        onChange={props.onChange}
        addCandidate={props.addCandidate}
      />
      <Card>
        <Button className="text-center" onClick={() => props.toggle("SS")}>
          Add Candidate
        </Button>
      </Card>
      <Modal isOpen={props.isOpen} toggle={() => props.toggle("")}>
        <ModalHeader toggle={() => props.toggle("")}>
          Add Candidates
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label sm={4}>Candidate name </Label>

              <Col sm={8}>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={props.onChange}
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              props.addCandidate();
              props.toggle();
            }}
          >
            Add Candidate
          </Button>{" "}
          <Button color="secondary" onClick={() => props.toggle("")}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

const Candidates = (props) => (
  <Card>
    {props.candidates.map((candidate) => (
      <CardHeader className="text-left">
        <div className="container">
          <div className="row">
            <h4 className="col-6">{candidate.name}</h4>
            <div className="col-6 text-right">
              <Button
                outline
                color="secondary"
                onClick={() => props.handleClick(candidate.name, props.post)}
              >
                <i className="fas fa-times-circle"></i>
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
    ))}
  </Card>
);
//   // <h1>Hi</h1>
export default EditDetails;
