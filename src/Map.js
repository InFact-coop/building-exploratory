import React, { Component } from 'react';
// import ReactMapboxGL, { Layer, Feature } from 'react-mapbox-gl';
import MapLayer from './MapLayer';
import ReactMapGL, { Marker, NavigationControl, FlyToInterpolator } from 'react-map-gl';

// const Mapbox = ReactMapboxGL({
//   accessToken: 'pk.eyJ1Ijoic29oaWxwYW5keWEiLCJhIjoiY2phODdiMnM1MDQybjMycGZ3ZTE0d3RsOCJ9.4WBBpoMgECNDbRL4BahGhQ'
// });

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
      popupInfo: null
    };
  }

  _updateViewport = (viewport) => {
    this.setState({ viewport });
  }

  _goToViewport = ({ longitude, latitude }) => {
    this._onViewportChange({
      longitude,
      latitude,
      zoom: 11,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 3000
    });
  }


  render() {

    const { buildings = [], handleBuildingDetails, mapCenter, mapZoom } = this.props;
    const { viewport } = this.state;

    const allMarkers = buildings.length > 0 && buildings.map((buildingObj, i) => {
      console.log('hello', buildingObj.longitude, buildingObj.latitude)
      return (
        <Marker
          key={i}
          longitude={buildingObj.longitude}
          latitude={buildingObj.latitude}
          onClick={(obj) => {
            handleBuildingDetails(obj, buildingObj);
          }}
        >
          <div
            onMouseEnter={(obj) => {
              console.log('entered');
            }}
            onMouseLeave={(obj) => {
              console.log('left');
            }}
          >
          a
          </div>
        </ Marker>
      );
    });

    return (
      <ReactMapGL
          { ...viewport }
          mapboxApiAccessToken={'pk.eyJ1Ijoic29oaWxwYW5keWEiLCJhIjoiY2phODdiMnM1MDQybjMycGZ3ZTE0d3RsOCJ9.4WBBpoMgECNDbRL4BahGhQ'}
          mapStyle='mapbox://styles/sohilpandya/cja87dmin0ct62sl4jxyo4tzp'
          onViewportChange={this._goToViewport}
        >
        { buildings.length > 0 && allMarkers }

        <NavigationControl onViewportChange={this._updateViewport} />
        </ReactMapGL>
    )
  }
}

export default Map;
