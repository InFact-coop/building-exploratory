import React,  { Component } from 'react';
import ReactMapboxGL, { Layer, Feature } from 'react-mapbox-gl';

class Map extends Component {

  constructor(props) {
    super(props);
  }

shouldComponentUpdate(nextProps, nextState) {
  // If shouldComponentUpdate returns false, 
  // then render() will be completely skipped until the next state change.
  // In addition, componentWillUpdate and componentDidUpdate will not be called. 
  return nextProps.buildings !== this.props.buildings;
}

  render() {
    const { buildings, handleBuildingDetails } = this.props
    const Mapbox = ReactMapboxGL({
      accessToken: 'pk.eyJ1Ijoic29oaWxwYW5keWEiLCJhIjoiY2phODdiMnM1MDQybjMycGZ3ZTE0d3RsOCJ9.4WBBpoMgECNDbRL4BahGhQ'
    });

    // for each building create a Feature Component
    const allMarkers = buildings && buildings.map((building) => {
      return <Feature
      coordinates={[building.longitude, building.latitude]}
      onClick={ (obj) => { console.log(obj, building); handleBuildingDetails(obj, building); }}
      />;
    });

    return (
      <Mapbox style="mapbox://styles/sohilpandya/cja87dmin0ct62sl4jxyo4tzp" center={[-0.1058, 51.5465]} zoom={[11.7]} containerStyle={{ height: "100vh", width: "50vw" }}>
        <Layer type="symbol" id="marker" layout={{ "icon-image": "circle-stroked-15" }}>
          {allMarkers}
        </Layer>
      </Mapbox>
    )
  }

}

export default Map;
