import React from "react"
import "./style.css";

function navBar() {
    return (
<div>
  <nav>
    <div class="">
    <img className="img" src={require('./logo.png')} alt="logo">
    </img>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/login">Log In</a></li>
      </ul>
    </div>
  </nav>
</div>
    )
}

export default navBar