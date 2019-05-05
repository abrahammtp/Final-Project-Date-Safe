import React, { Component } from "react";
import "./login.css"


class logIn extends Component {
    render() {
        return (
            <div className="login-card">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card ">
                            <div className="card-content black-text">
                                <span className="card-title">Log In To Your Account</span>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input value="" id="email_login" type="email" className="validate"></input>
                                        <label className="active" for="email_login">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input value="" id="password_login" type="password" className="validate"></input>
                                        <label className="active" for="password_login">Password</label>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action">
                                <a href="test">Log In</a>
                                <a href="test">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default logIn