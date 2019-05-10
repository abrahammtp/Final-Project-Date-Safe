import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "./Navbar/Navbar";
import { Row, Container, Col } from 'react-grid-system';

import "./style.css"
import Contacts from "./Contacts";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      dateName: "",
      dateNumber: "",
      metThrough: "",
      dateDescription: "",
      dateAddress: "",
      errors: {}
    };
  }


  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    // console.log("User ID: ", uid);

    //set state here of id to auth.id
    // this.setState({id:uid});

    const userDate = {
      id: this.state.id,
      dateName: this.state.dateName,
      dateNumber: this.state.dateNumber,
      metThrough: this.state.metThrough,
      dateDescription: this.state.dateDescription,
      dateAddress: this.state.dateAddress
    }
    console.log(userDate)
  }



  render() {
    const { user } = this.props.auth;

    var userId = user.id


    console.log(userId)

    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.modal');
      // eslint-disable-next-line
      var instances = window.M.Modal.init(elems);
    });

    return (
      <div>
        <Navbar />
        <Container>
          <Row className="topRow">
            <Col>
              <Container className="container">

                <Row>
                  <h4 className="newDateHeader">Going on a date?</h4>
                  {/* <Col debug> */}
                  {/* Modal Trigger */}
                </Row>
                <Row>
                  <a class="waves-effect waves-light btn modal-trigger newDateButton" href="#modal1">New Date</a>
                </Row>
                <div id="modal1" class="modal">
                  <div class="modal-content">
                    <h4>Create a new date!</h4>
                    <form onSubmit={this.onSubmit}>
                      <label htmlFor="text">What is your date's name?</label>
                      <input
                        onChange={this.onChange}
                        value={this.state.dateName}
                        id="dateName"
                        type="text"
                      />
                      <label htmlFor="text">What is your date's phone number</label>
                      <input
                        onChange={this.onChange}
                        value={this.state.dateNumber}
                        id="dateNumber"
                        type="text"
                      />
                      <label htmlFor="text">How did you meet?</label>
                      <input
                        onChange={this.onChange}
                        value={this.state.metThrough}
                        id="metThrough"
                        type="text"
                      />
                      <label htmlFor="text">What does your date look like?</label>
                      <input
                        onChange={this.onChange}
                        value={this.state.dateDescription}
                        id="dateDescription"
                        type="text"
                      />
                      <label htmlFor="text">Where are you going on your date?</label>
                      <input
                        onChange={this.onChange}
                        value={this.state.dateAddress}
                        id="dateAddress"
                        type="text"
                      />
                      <div class="modal-footer">
                        <button
                          type="submit"
                          className="btn modal-close waves-effect waves-green btn-flat"
                          href="#!"
                          value={this.state.id}
                        >
                          Submit
                             </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* </Col> */}
                {/* <Col debug></Col>
                  <Col debug></Col> */}
                {/* </Row> */}
              </Container>
            </Col>
            <Col>
              <Container className="container">

                <div className="userInfo">

                  <img className="picture" src={require("./../../images/IMG_20180315_222930_177.jpg")} height="275" width="275"></img>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  <p>Welcome to Date Safe</p>

                  <p>Hello, {user.name.split(" ")[0]}!</p>
                  {/* <p>Hello, {user.id}!</p> */}

                  {/* <p>Address: {user.address.split(" ")[0]}</p>
                    <p>Phone Number: {user.number.split(" ")[0]}</p> */}
                </div>
              </Container>
            </Col>
          </Row>
        </Container>


        <Container >

          <Row className="bottomRow">
            <Col>
              <Container className="container">
                <Col>
                  <Col>
                    <h5 className="dateOne">Upcoming dates</h5>
                    <p className="dateOne1">Date on 05/22/2019</p>
                    <p className="date1">Going to Barcade with Kelly</p>
                  </Col>
                  <Col>
                    <h5>Previous dates</h5>
                    <p className="dateOne1">Date on 04/18/2019</p>
                    <p className="date1">Went to TopGolf with Jennifer and then went to The Cloak and Blaster</p>
                    <p className="dateOne1">Date on 03/01/2019</p>
                    <p className="date1">Went to The Orlando Improv with Fernanda</p>
                    <p className="dateOne1">Date on 01/15/2019</p>
                    <p className="date1">Went to Domu with Jennifer and then went to Lake Cherokee Park</p>
                  </Col>
                </Col>
              </Container>
            </Col>

            <Col>
              <Container className="container">
                <Col>
                  <h5 className="dateOne">Contacts</h5>
                  <button className="waves-effect waves-light btn modal-trigger newContactButton">Add Contact</button>
                  <Container className="contactCard">
                    <p className="contactOne">Rodrigo</p>
                    <p>Phone Number: 907-495-3693</p>
                    <p>Relationship: Brother</p>
                  </Container>
                  <Container className="contactCard">
                    <p className="contactOne">Sandra</p>
                    <p>Phone Number: 658-848-2659</p>
                    <p>Relationship: Friend</p>
                  </Container>

                </Col>
              </Container>
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);