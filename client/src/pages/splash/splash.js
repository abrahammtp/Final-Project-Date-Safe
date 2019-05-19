import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar/Navbar"
import "./splash.css";

class Splash extends Component {
  render() {
    return (

      <div className="test">
        <Navbar />
        <div >
          <div className="info-container">
            <h2 className="splash">Keep Dating</h2><h2 className="splash">Worry Free!</h2>
            <p className="para">When going on a first date all you should have to worry about is finding the spark, leave the safety to us! Keep your friends and family updated on your location and who you are with so you can date stress free!</p>
            <div class="row">
              <Link to="/register">
                <button className="btn waves-effect" type="submit" name="action">Join now!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Splash