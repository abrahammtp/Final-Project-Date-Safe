import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import "./style.css"
import api from "../../utils/api"
// var ObjectId = require('mongodb').ObjectID;



class Date extends Component {
    constructor() {
        super();
        this.state = {
            dateName: "",
            dateNumber: "",
            metThrough: "",
            dateDescription: "",
            dateAddress: "",
            dateWhen: "",
            errors: {}
        };
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const { user } = this.props.auth;
        console.log(user)
        api.saveDate({
            dates: {
                userId: user.id,
                dateName: this.state.dateName,
                dateNumber: this.state.dateNumber,
                metThrough: this.state.metThrough,
                dateDescription: this.state.dateDescription,
                dateAddress: this.state.dateAddress,
                dateWhen: this.state.dateWhen,
                dateTaken: false
            }
        }).then(console.log("done!"));
    }

    render() {
        // eslint-disable-next-line
        const { user } = this.props.auth;

        return (
            <div className="container">
                <div className="content">
                    <h4>Create a new date!</h4>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="text">What is your date's name?</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.dateName}
                            id="dateName"
                            type="text"
                        />
                        <label htmlFor="text">What is your date's phone number</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.dateNumber}
                            id="dateNumber"
                            type="text"
                        />
                        <label htmlFor="text">How did you meet?</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.metThrough}
                            id="metThrough"
                            type="text"
                        />
                        <label htmlFor="text">What does your date look like?</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.dateDescription}
                            id="dateDescription"
                            type="text"
                        />
                        <label htmlFor="text">Where are you going on your date?</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.dateAddress}
                            id="dateAddress"
                            type="text"
                        />
                        <label htmlFor="text">When are you going on your date?</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.dateWhen}
                            id="dateWhen"
                            type="text"
                        />
                        <div className="form-button1">
                            <button
                                type="submit"
                                className="btn waves-effect waves-green btn-flat"
                                href="#!"
                            >Submit
                             </button>
                            <Link to="/dashboard">
                            <button className="btn waves-effect waves-green btn-flat">Dashboard</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Date.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Date);