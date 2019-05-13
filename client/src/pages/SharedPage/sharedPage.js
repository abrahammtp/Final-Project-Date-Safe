import React, { Component } from 'react';
// import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './style.css'

import Map from '../../components/MapsAPI/maps';

export class Shared extends Component {
  // state = {
  //   showingInfoWindow: false,
  //   activeMarker: {},
  //   selectedPlace: {}
  // };

  // onMarkerClick = (props, marker, e) =>
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true
  //   });

  // onClose = props => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // };

  render() {
    return (
      <Map />
      // centerAroundMap google={this.props.google}>
      //   <Marker onClick={this.onMarkerClick} name={'current location'} />
      //   <InfoWindow
      //     marker={this.state.activeMarker}
      //     visible={this.state.showingInfoWindow}
      //     onClose={this.onClose}
      //   >
      //     <div>
      //       <h4>{this.state.selectedPlace.name}</h4>
      //     </div>
      //   </InfoWindow>
      // </Map>
    );
  }
}

export default Shared