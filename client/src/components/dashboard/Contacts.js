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
                {/* Modal Trigger */}
                <div>
                    <Link to="/contacts">
                        <button className="waves-effect waves-light btn newContactButton" href="#modal2">New contact</button>
                    </Link>

                    {/* <div id="modal2" className="modal">
                        <div className="modal-content">
                            <h4>Add a new contact</h4>
                            <form onSubmit={this.onSubmit}>
                                <label htmlFor="text">Name of your contact</label>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.contactName}
                                    id="contactName"
                                    type="text"
                                />
                                <label htmlFor="text">Contact's phone number</label>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.contactNumber}
                                    id="contactNumber"
                                    type="text"
                                />
                                <label htmlFor="text">Relationship with the contact</label>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.relationship}
                                    id="contactRelationship"
                                    type="text"

                                />
                                <div className="modal-footer">
                                    <button href="#!" type="submit" className="modal-close waves-effect waves-green btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div> */}
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