import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "./Navbar/Navbar";
import { Row, Container, Col } from 'react-grid-system';
import Contacts from "./Contacts";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      dateName: "",
      dateNumber: "",
      metThrough: "",
      dateDescription: "",
      dateAddress: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onSubmit = e => {
    e.preventDefault();
    const userDate = {
      id: this.user.id,
      dateName: this.state.dateName
    }
  }


  render() {
    const { user } = this.props.auth;

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = window.M.Modal.init(elems);
  });

    return (
      <div>
        <Navbar />
        <Container fluid style={{ lineHeight: '100px' }}>
          <Row>
            <Col debug>
              <Container fluid style={{ lineHeight: '64px' }}>
                <Row>
                  <Col debug>
                    {/* Modal Trigger */}

                    <a class="waves-effect waves-light btn modal-trigger" href="#modal1">New Date</a>

                    <div id="modal1" class="modal">
                      <div class="modal-content">
                        <h4>Create a new date!</h4>
                        <form onSubmit={this.onSubmit}>
                        <label htmlFor="text">Name of your date</label>
                        <input
                        onChange={this.onChange}
                        value={this.state.dateName}
                        id="dateName"
                        type="text"
                        />
                        </form>
                      </div>
                      <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn">Submit</a>
                      </div>
                    </div>
                  </Col>
                  <Col debug></Col>
                  <Col debug></Col>
                </Row>
              </Container>
            </Col>
            <Col debug>
              <Container fluid style={{ lineHeight: '80px' }}>
                <Row>
                  <Col debug></Col>
                  <Col debug>
                    <div>
                      <p>Hello, {user.name.split(" ")[0]}!</p>
                      <p>Hello, {user.id}!</p>

                      <p>Welcome to Date Safe</p>
                      {/* <p>Address: {user.address.split(" ")[0]}</p>
                    <p>Phone Number: {user.number.split(" ")[0]}</p> */}
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <br />
        <Container fluid style={{ lineHeight: '300px' }}>
          <Row debug>
            <Col debug>
              <Col fluid style={{ lineHeight: '150px' }}>Upcoming dates</Col>
              <Col fluid style={{ lineHeight: '150px' }}>Previous dates</Col>
            </Col>
            <Col debug>
              <Row>
                <Col fluid style={{ lineHeight: '100px' }}>
                  <Contacts />
                </Col>
                <Col fluid style={{ lineHeight: '100px' }}></Col>
                <Col fluid style={{ lineHeight: '100px' }}>Contacts</Col>
              </Row>
            </Col>
          </Row>
        </Container>
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