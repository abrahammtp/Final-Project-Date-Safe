
import React, { Component } from 'react';
import './style.css'
import api from "../../utils/api";
import Navbar from "../../components/layout/Navbar2/Navbar2";
import { Row, Container, Col } from 'react-grid-system';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import Map from "../../components/MapsAPI/maps";
import Footer from "../../components/layout/registerFooter/footer3"


export class Shared extends Component {
  state = {
    dateName: "",
    dateAddress: "",
    dateWhen: "",
    metThrough: "",
    dateDescription: "",

  }

  getSavedDates = () => {
    const { user } = this.props.auth;

    api.getSavedDates(user.id).then(res =>

      this.setState({
        dateName: res.data[0].dates.dateName,
        dateWhen: res.data[0].dates.dateWhen,
        dateAddress: res.data[0].dates.dateAddress,
        dateDescription: res.data[0].dates.dateDescription,
        metThrough: res.data[0].dates.metThrough,
      })
    )
  }
  render() {
    this.getSavedDates();
    const { user } = this.props.auth;
    const photo = user.userPhoto

    return (
      <div className="full-shared-page">
        <Navbar />
        <div className="sharedPage-Container">
          <Row>
            <Col>
              <Container className="sharedUser">

                <div className="sharedUserInfo1">
                  <img className="sharedPicture" src={(photo)} height="275" width="275" alt="user"></img>
                </div>
                <Col>
                  <div className="sharedUserInfo">
                    <p>Hello, <b><i>{user.name.split(" ")[0]}!</i></b></p>
                    <p>Welcome to Date Safe</p>
                    <p>Address: {user.address}</p>
                    <p>Phone Number: {user.number}</p>
                  </div>
                </Col>
              </Container>
            </Col>
            <Col>
              <Container>
                <div className="sharedDate">
                  <h3 className="sharedDateHeader">Date Info</h3>
                  <div className="sharedDateInfo">
                    <p>Date's name: {this.state.dateName}</p>
                    <p>How they met: {this.state.metThrough}</p>
                    <p>Date notes: {this.state.dateDescription}</p>
                  </div>
                </div>
              </Container>
            </Col>
          </Row>
          <Container>
            <div className="map">
              <h3>Date Location</h3>
              <h5>{this.state.dateAddress}</h5>
              <Map />
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

Shared.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Shared);