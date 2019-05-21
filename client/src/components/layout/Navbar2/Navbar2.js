import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class navBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="">
            <img className="img" src={require('../Navbar/logo.png')} alt="logo">
            </img>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <div className="sharedButton">
                <Link to="/dashboard">
                <button className="btn waves-effect light-blue" type="submit" name="action">Dashboard</button>
                </Link>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default navBar