import React, { Component } from 'react';
import ReactMapboxGL from 'react-mapbox-gl';
import MapLayer from './MapLayer';

const Mapbox = ReactMapboxGL({
  accessToken: 'pk.eyJ1Ijoic29oaWxwYW5keWEiLCJhIjoiY2phODdiMnM1MDQybjMycGZ3ZTE0d3RsOCJ9.4WBBpoMgECNDbRL4BahGhQ'
});

class Map extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { buildings, handleBuildingDetails, mapCenter, mapZoom } = this.props;
    return (
      <Mapbox
      style="mapbox://styles/sohilpandya/cja87dmin0ct62sl4jxyo4tzp"
      center={ mapCenter }
      zoom={ mapZoom }
      containerStyle={{ height: "93vh", width: "100%" }}
      movingMethod={'flyTo'}>
        <MapLayer
          { ...this.props }
          />
      </Mapbox>
    )
  }
}

export default Map;
