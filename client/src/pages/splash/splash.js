import React, { Component } from "react";
import "./splash.css";

class Splash extends Component {
render () {
    return(

      <div className="test">
    <div className="info-container">
      <h2 className="splash">Keep Dating</h2><h2 className="splash">Worry Free!</h2>
      <p className="para">When going on a first date all you should have to worry about is finding the spark, leave the safety to us! Keep your friends and family updated on your location and who you are with so you can date stress free!</p>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input id="full_name" type="text" class="validate"></input>
              <label for="full_name">Full Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate"></input>
              <label for="email">Email</label>
            </div>
          </div>
        </form>
        <button className="btn waves-effect" type="submit" name="action" href="/signup">Join now!
  </button>
      </div>
    </div>
  </div>
  
    )}
}
export default Splash