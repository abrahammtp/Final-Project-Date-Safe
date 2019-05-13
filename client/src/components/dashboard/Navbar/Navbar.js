import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../../actions/authActions";
import "./style.css";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <div>
        <nav>
          <div className="">
            <img className="img" src={require('./logo.png')} alt="logo">
            </img>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <Link to="/login">
                <button className="btn waves-effect" type="submit" name="action" onClick={this.onLogoutClick}>Log Out</button>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
