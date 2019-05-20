import React, { Component } from "react";
import api from "../../utils/api";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import Geocode from "react-geocode";



class Map extends Component {
    state = {
        dateAddress: ""
    }

    getSavedDates = () => {
        const { user } = this.props.auth;

        api.getSavedDates(user.id).then(res =>

            this.setState({
                dateAddress: res.data[0].dates.dateAddress,

            })
        )
        // Geocode.setApiKey("AIzaSyCe9SUKM1ASyMMKdThjRFXBpPYGlFwTuz8");


        // Geocode.fromAddress(this.state.dateAddress).then(
        //     response => {
        //         const { lat, lng } = response.results[0].geometry.location;
        //        this.setState({
        //            lat: lat,
        //            lng: lng

        //        })
        //     },
        //     error => {
        //         console.error(error);
        //     }
        // );
    }

    componentDidMount() {
        this.renderMap()
    }


    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCe9SUKM1ASyMMKdThjRFXBpPYGlFwTuz8&callback=initMap")
        window.initMap = this.initMap
    }

    initMap = () => {
        // eslint-disable-next-line
        var map = new window.google.maps.Map
            (document.getElementById('map'), {
                zoom: 15,
                center: {
                    lat: 28.538336,
                    lng: -81.379234
                }
            });
        // eslint-disable-next-line
        var marker = new window.google.maps.Marker({
            map: map,
            position: {
                lat: 28.538336,
                lng: -81.379234
            }
        });
    }


    render() {
        this.getSavedDates();

        return (
            <main>
                <div id="map"></div>
            </main>
        )

    }
}
/*
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCe9SUKM1ASyMMKdThjRFXBpPYGlFwTuz8&callback=initMap"
async defer></script>
*/
function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0]

    var script = window.document.createElement("script")

    script.src = url

    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}
Map.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Map);