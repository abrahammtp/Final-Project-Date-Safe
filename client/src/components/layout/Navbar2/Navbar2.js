import React, { Component } from "react";
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
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default navBar