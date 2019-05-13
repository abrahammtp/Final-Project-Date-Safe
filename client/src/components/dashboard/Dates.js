import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import "./style.css"
import api from "../../utils/api"


class Date extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            dateName: "",
            dateNumber: "",
            metThrough: "",
            dateDescription: "",
            dateAddress: "",
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

        // console.log("User ID: ", uid);

        //set state here of id to auth.id
        // this.setState({id:uid});
        const { user } = this.props.auth;
        console.log(user)
        api.saveDate({
            id: user.id,
            dateName: this.state.dateName,
            dateNumber: this.state.dateNumber,
            metThrough: this.state.metThrough,
            dateDescription: this.state.dateDescription,
            dateAddress: this.state.dateAddress
        }).then(console.log("done!"))

    }



    render() {
        // eslint-disable-next-line
        const { user } = this.props.auth;

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
                // eslint-disable-next-line
            var instances = window.M.Modal.init(elems);
        });

        return (
            <div>
                <a className="waves-effect waves-light btn modal-trigger" href="#modal1">New Date</a>
                <div id="modal1" className="modal">
                    <div className="modal-content">
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
                            <div className="modal-footer">
                                <button
                                    type="submit"
                                    className="btn modal-close waves-effect waves-green btn-flat"
                                    href="#!"
                                    value={this.state.id}
                                >
                                    Submit
                             </button>
                            </div>
                        </form>
                    </div>
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