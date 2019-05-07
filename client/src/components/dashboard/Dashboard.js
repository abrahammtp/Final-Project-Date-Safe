import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "./Navbar/Navbar";
import { Row, Container, Col } from 'react-grid-system';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      // <div style={{ height: "75vh" }} className="container valign-wrapper">
      //   <div className="row">
      //     <div className="col s12 center-align">
      //       <h4>
      //         <b>Hey there,</b> {user.name.split(" ")[0]}
      //         <p className="flow-text grey-text text-darken-1">
      //           You are logged into a full-stack{" "}
      //           <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
      //         </p>
      //       </h4>
      //       <button
      //         style={{
      //           width: "150px",
      //           borderRadius: "3px",
      //           letterSpacing: "1.5px",
      //           marginTop: "1rem"
      //         }}
      //         onClick={this.onLogoutClick}
      //         className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      //       >
      //         Logout
      //       </button>
      //     </div>
      //   </div>
      // </div>
      <div>
        <Navbar />
        <Container fluid style={{ lineHeight: '100px' }}>
          <Row>
            <Col debug>
              <Container fluid style={{ lineHeight: '64px' }}>
                <Row>
                  <Col debug>
                    <button>Create a new date</button>
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