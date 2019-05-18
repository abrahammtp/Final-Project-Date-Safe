import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "./Navbar/Navbar";
import { Row, Container, Col } from 'react-grid-system';
import "./style.css"
import Contacts from "./Contacts";
import { Link } from "react-router-dom";
import api from "../../utils/api";

class Dashboard extends Component {
  state = {
    contactName: "",
    contactNumber: "",
    relationship: "",
  }

  getContacts  = () => {
    api.getSavedContacts(this.state.q)
      .then(res => 
        this.setState({
          contacts: res.data
        })
        )
        .catch(() => 
          this.setState({
            contacts: [],
            message: "No contacts have been saved"
          })
        );
  };

  getSavedDates = () => {
    const { user } = this.props.auth;
    api.getSavedDates(user.id)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.getSavedDates();
  };

  render() {
    const { user } = this.props.auth;

    const photo = user.userPhoto
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
                <button className="btn waves-effect" type="submit" value={user.id} name="action" onClick={() => this.getSavedDates()}>Refresh Dates</button>
              </Container>
            </Col>
            <Col>
              <Container className="userContainer">

                <Col>
                  <div className="userInfo1">
                    <img className="picture" src={(photo)} height="275" width="275" alt="user"></img>
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
                    <h5 className="dateOne">Upcoming date</h5>
                    <p className="dateOne1">Date on {user.dateWhen}</p>
                    <p className="date1">Going to {user.dateAddress} with {user.dateName}</p>
                  </Col>
                  <Col>
                    {/* <h5>Previous dates</h5>
                    <p>Date's Name: {user.dateName}</p>
                    <p>Date's Phone Number: {user.dateNumber}</p>
                    <p>How you met: {user.metThrough}</p>
                    <p>Description of Date: {user.dateDescription}</p>
                    <p>Where you're going: {user.dateAddress}</p>
                    <p>When the date is: {user.dateWhen}</p> */}
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
                    <p>Emergency Contact: {this.state.contactName}</p>
                    <p>Contact Number: {this.state.contactNumber}</p>
                    <p>Relationship to contact: {this.state.relationship}</p>
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