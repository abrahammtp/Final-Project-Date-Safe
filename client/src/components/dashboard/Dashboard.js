import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "./Navbar/Navbar";
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
        <div className="col-lg-6">
          <div className="Row">
            <div className="col-md-5">
              <button>Create a new date</button>
            </div>
          </div>
          <br></br>
          <div className="col-lg-10">
            <h1>Previous and upcoming dates are going to be here</h1>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="col-lg-8">
            <div className="Row">
              <div className="col-md-4">
                <h2>{user.name.split(" ")[0]} 's photo</h2>
              </div>
              <br></br>
              <div className="col-lg-8">
                <h2>{user.name.split(" ")[0]} 's Information</h2>
              </div>
            </div>
            <div className="Row">
              <div className="Row">
                <div className="col-lg-10">
                  <h2>Contacts</h2>
                </div>
              </div>
              <div className="Row">
                <h2>Emergency contacts are going to be here</h2>
              </div>
            </div>
          </div>
        </div>
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