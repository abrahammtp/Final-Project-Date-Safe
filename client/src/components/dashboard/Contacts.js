import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            contactName: "",
            contactNumber: "",
            contactRelationship: "",
            errors: {}
        };
    };

    onChange = e => {
        this.setState({
            [e.target.id]:
                e.target.value
        });
    };

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    onSubmit = e => {
        e.preventDefault();
        const { user } = this.props.auth;
        console.log(user)
        const userContact = {

            id: user.id,
            contactName: this.state.contactName,
            contactNumber: this.state.contactNumber,
            contactRelationship: this.state.contactRelationship
        }
        console.log(userContact);
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
                <div>
                    <Link to="/contacts">
                        <button className="waves-effect waves-light btn newContactButton light-blue" href="#modal2">New contact</button>
                    </Link>
                </div>
            </div >
        )
    }
}
Contact.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Contact);