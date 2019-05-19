
import React, { Component } from 'react';
import './style.css'
import api from "../../utils/api";
import Navbar from "../../components/layout/Navbar/Navbar";
import { Row, Container, Col } from 'react-grid-system';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";



export class Shared extends Component {
state = {
    dateName: "",
    dateAddress: "",
    dateWhen: "",
    metThrough: "",
    dateDescription: "",
    name: "",
    number: "",
    userPhoto: "",
}

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
  render() {
    this.getSavedDates();
    const { user } = this.props.auth;
    const photo = user.userPhoto

    return (
    <div>
        <Navbar />
        <Row>
        <Col>
        <Container>
            <div>
            <img className="picture" src={(photo)} height="275" width="275" alt="user"></img>
            <h4>{user.name}</h4>
            <h5>{user.number}</h5>
            </div>
        </Container>
        </Col>
        <Col>
        <Container>
            <div>
                <h3>Current Location</h3>
                <h5>{this.state.dateAddress}</h5>
            </div>
        </Container>
        </Col>
        </Row>
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