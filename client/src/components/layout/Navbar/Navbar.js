import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class navBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="">
            <img className="img" src={require('./logo.png')} alt="logo">
            </img>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <Link to="/login">
                <button className="btn waves-effect" type="submit" name="action">Log In</button>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default navBar