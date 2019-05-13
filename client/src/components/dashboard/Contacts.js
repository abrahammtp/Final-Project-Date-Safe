import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            contactName: "",
            contactNumber: "",
            relationship: "",
            errors: {}
        };
    }
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
        const { user }  = this.props.auth;
        console.log(user)
        const userContact = {
            id: user.id,
            contactName: this.state.contactName,
            contactNumber: this.state.contactNumber,
            relationship: this.state.relationship
        }
        console.log(userContact);
    }

    render() {
        const { user } = this.props.auth;

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = window.M.Modal.init(elems);
        });

        return (
            <div>
                {/* Modal Trigger */}
                <div>
                    <a class="waves-effect waves-light btn modal-trigger" href="#modal2">New contact</a>

                    <div id="modal2" class="modal">
                        <div class="modal-content">
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
                                <div class="modal-footer">
                                    <button href="#!" type="submit" class="modal-close waves-effect waves-green btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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