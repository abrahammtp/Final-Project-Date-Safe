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
import Footer from "../../components/layout/splashFooter/footer2";

class Dashboard extends Component {
  state = {
    dateName: "",
    dateWhen: "",
    dateAddress: "",
    contactName: "",
    contactNumber: "",
    relationship: "",
  }

  getSavedContacts = () => {
    const { user } = this.props.auth;
    api.getSavedContacts(user.id).then(res =>

      this.setState({
        contactName: res.data[0].contacts.contactName,
        contactNumber: res.data[0].contacts.contactNumber,
        relationship: res.data[0].contacts.relationship
      })
    )
  };

  getSavedDates = () => {
    const { user } = this.props.auth;

    api.getSavedDates(user.id).then(res =>

      this.setState({
        dateName: res.data[0].dates.dateName,
        dateWhen: res.data[0].dates.dateWhen,
        dateAddress: res.data[0].dates.dateAddress,
      })
    )
  }


  handleFormSubmit = event => {
    event.preventDefault();
    this.getSavedDates();
    this.getSavedContacts();
  };

  render() {
    this.getSavedContacts();
    this.getSavedDates()
    const { user } = this.props.auth;

    const photo = user.userPhoto
    return (
      <div className="full-dashboard-page">
        <Navbar />
        <div className="dashboard">
          <Container>
            <Row className="topRow">
              <Col>
                <Container className="userContainer">

                  <Row>
                    <h4 className="newDateHeader">Going on a date?</h4>

                  </Row>
                  <br></br>
                  <Link to="/dates">
                    <button className="btn waves-effect date-Button light-blue" type="submit" name="action">New Date</button>
                  </Link>
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
                      <p>Hello, <b><i>{user.name.split(" ")[0]}!</i></b></p>
                      <p>Welcome to Date Safe</p>
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

                      <h4 className="dateOne">Upcoming date</h4>
                      <Link to="/shared">
                        <button className="btn waves-effect share-Button light-blue" type="submit" name="action">Share Date</button>
                      </Link>
                      <br></br>
                      <h5>Date on {this.state.dateWhen}</h5>
                      <h6 className="date1">Going to {this.state.dateAddress} with {this.state.dateName}</h6>
                    </Col>
                  </Col>
                </Container>
              </Col>

              <Col>
                <Container className="userContainer">
                  <Col>

                    <h4 className="contactOne">Emergency Contact</h4>
                    <div className="contactButton">
                      <Contacts />
                    </div>

                    <Container className="contactCard">
                      <p>Name: {this.state.contactName}</p>
                      <p>Phone Number: {this.state.contactNumber}</p>
                      <p>Relationship to contact: {this.state.relationship}</p>

                    </Container>
                  </Col>

                </Container>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div >
      </div>
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