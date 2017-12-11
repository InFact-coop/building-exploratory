import React, { Component } from 'react';
import ReactMapGL, { Marker, NavigationControl, FlyToInterpolator } from 'react-map-gl';

import MarkerFilled from './MarkerFilled';
import MarkerEmpty from './MarkerEmpty';


class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: this.props.mapCenter[1],
        longitude: this.props.mapCenter[0],
        zoom: 11.5,
        bearing: 0,
        pitch: 0,
        width: 500,
        height: 500,
      },
      popupInfo: null,
      hovering: false,
      id: undefined
    };
  }

  _updateViewport = (viewport) => {
    this.setState({ viewport });
  }

  _onViewportChange = viewport => this.setState({
    viewport: { ...this.state.viewport, ...viewport }
  });

  _goToViewport = ({ longitude, latitude }) => {
    this._onViewportChange({
      longitude,
      latitude,
      zoom: 15,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 1000
    });
  }

  _hoveringItem = (id) => {
    this.setState({ hovering: !this.state.hovering, id } )
  }

  render() {

    const { buildings = [], handleBuildingDetails, mapCenter, mapZoom } = this.props;
    const { viewport } = this.state;

    const allMarkers = buildings.length > 0 && buildings.map((buildingObj, i) => {
      return (
        <Marker
          key={i}
          longitude={buildingObj.longitude}
          latitude={buildingObj.latitude}
        >
          <div
            onMouseEnter={(obj) => {
              console.log('entered');
              this._hoveringItem(i);
            }}
            onClick={() => {
              console.log('hello')
              handleBuildingDetails(buildingObj);
              let longitude = buildingObj.longitude;
              let latitude = buildingObj.latitude;
              this._goToViewport({longitude, latitude});
            }}
            onMouseLeave={(obj) => {
              console.log('left');
              this._hoveringItem(undefined);
            }}
          >
          {
              this.state.hovering && this.state.id === i ? <MarkerFilled /> : <MarkerEmpty />
          }
          </div>
        </ Marker>
      );
    });

    return (
      <ReactMapGL
          { ...viewport }
          mapboxApiAccessToken={'pk.eyJ1Ijoic29oaWxwYW5keWEiLCJhIjoiY2phODdiMnM1MDQybjMycGZ3ZTE0d3RsOCJ9.4WBBpoMgECNDbRL4BahGhQ'}
          mapStyle='mapbox://styles/sohilpandya/cja87dmin0ct62sl4jxyo4tzp'
        onViewportChange={this._updateViewport}
        >
        { buildings.length > 0 && allMarkers }
        </ReactMapGL>
    )
  }
}

export default Map;
