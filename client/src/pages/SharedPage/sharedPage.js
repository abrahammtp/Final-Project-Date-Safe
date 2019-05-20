
import React, { Component } from 'react';
import './style.css'
import api from "../../utils/api";
import Navbar from "../../components/layout/Navbar/Navbar";
import { Row, Container, Col } from 'react-grid-system';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import Map from "../../components/MapsAPI/maps"


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
      <div>
        <Navbar />
        <Row>
<Col>
          <Container className="sharedUser">

              <div className="userInfo1">
                <img className="picture" src={(photo)} height="275" width="275" alt="user"></img>
              </div>
              <div className="userInfo">
                <p>Hello, {user.name.split(" ")[0]}!</p>
                <p>Welcome to Date Safe</p>
                <p>Address: {user.address}</p>
                <p>Phone Number: {user.number}</p>
              </div>
          </Container>
</Col>
<Col>
              <Container>
                <div className="sharedDate">
                  <h3>Date Info</h3>
                  <h6>Date's Name: {this.state.dateName}</h6>
                  <h6>How they met: {this.state.metThrough}</h6>
                  <h6>Date Notes: {this.state.dateDescription}</h6>
                </div>
              </Container>
</Col>
        </Row>
              <Container>
                <div className="map">
                  <h3>Current Location</h3>
                  <h5>{this.state.dateAddress}</h5>
                  <Map />
                </div>
              </Container>
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