import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "./Navbar/Navbar";
import { Row, Container, Col } from 'react-grid-system';
import "./style.css"
import Contacts from "./Contacts";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <Navbar />
        <Container>
          <Row className="topRow">
            <Col>
              <Container className="userContainer">

                <Row>
                  <h4 className="newDateHeader">Going on a date?</h4>
                  {/* <Col debug> */}
                  {/* Modal Trigger */}
                </Row>
                <Link to="/dates">
                <button className="btn waves-effect" type="submit" name="action">New Date</button>
              </Link>
              </Container>
            </Col>
            <Col>
              <Container className="userContainer">

                <Col>
                  <div className="userInfo1">
                    <img className="picture" src={require("./../../images/IMG_20180315_222930_177.jpg")} height="275" width="275" alt="user"></img>
                  </div>
                </Col>
                <Col>
                  <div className="userInfo">

                    <p>Welcome to Date Safe</p>

                    <p>Hello, {user.name.split(" ")[0]}!</p>
                    {/* <p>Hello, {user.id}!</p> */}

                    <p>Address: {user.address}</p>
                    <p>Phone Number: {user.number}</p>
                  </div>
                </Col>
              </Container>
            </Col>
          </Row>
        </Container>


        <Container >
          <Row className="bottomRow">
            <Col>
              <Container className="userContainer">
                <Col>
                  <Col>
                    <h5 className="dateOne">Upcoming dates</h5>
                    <p className="dateOne1">Date on 05/22/2019</p>
                    <p className="date1">Going to Barcade with Kelly</p>
                  </Col>
                  <Col>
                    <h5>Previous dates</h5>
                <p>Date's Name: {user.dateName}</p>
                <p>Date's Phone Number: {user.dateNumber}</p>
                <p>How you met: {user.metThrough}</p>
                <p>Description of Date: {user.dateDescription}</p>
                <p>Where you're going: {user.dateAddress}</p>
                <p>When the date is: {user.dateWhen}</p>
                <p>Emergency Contact: {user.contactName}</p>
                <p>Contact Number: {user.contactNumber}</p>
                <p>Relationship to contact: {user.relationship}</p>
                  </Col>
                </Col>
              </Container>
            </Col>

            <Col>
              <Container className="userContainer">
                <Col>

                  <h5 className="dateOne">Contacts</h5>
                  <Contacts />

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