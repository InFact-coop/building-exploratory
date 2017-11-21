import React, { Component } from 'react';
import ReactMapboxGL, { Layer, Feature } from 'react-mapbox-gl';

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
      containerStyle={{ height: "100vh", width: "50vw" }}
      movingMethod={'flyTo'}>
        <LayerContainer
          { ...this.props }
          />
      </Mapbox>
    )
  }
}

class LayerContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { buildings, building, handleBuildingDetails } = this.props;
    // for each building create a Feature Component

    const unselectedBuildings = buildings && buildings.filter((buildingObj) => {
      return buildingObj.longitude != building.longitude && buildingObj.latitude != building.latitude
    });

    console.log(unselectedBuildings);

    const selectedBuilding = buildings && buildings.filter((buildingObj) => {
      return buildingObj.longitude === building.longitude && buildingObj.latitude === building.latitude
    })
    console.log(selectedBuilding);

    const allMarkers = buildings && unselectedBuildings.map((buildingObj, i) => {
      console.log('WE ARE INB ALL MARKERS')

      if (building && buildingObj.longitude != building.longitude && buildingObj.latitude != building.latitude) {
        console.log(this.props, 'inside all markers')        
      return (
        <Feature
        key={i}
        coordinates={[buildingObj.longitude, buildingObj.latitude]}
        onClick={ (obj) => { 
          handleBuildingDetails(obj, buildingObj); 
        }}
      />);
      }
    });
    const selectedMarkers = buildings && selectedBuilding.map((buildingObj, i) => {
      console.log('WE ARE INB ALL MARKERS')

      if (building && buildingObj.longitude != building.longitude && buildingObj.latitude != building.latitude) {
        console.log(this.props, 'inside selected markers')
      return (
        <Feature
        key={i}
        coordinates={[buildingObj.longitude, buildingObj.latitude]}
        onClick={ (obj) => { 
          handleBuildingDetails(obj, buildingObj); 
        }}
      />);
      }
    });


    return (
      <div>
        <Layer type="symbol" id="marker" layout={{ "icon-image": "circle-stroked-15" }}>
          {allMarkers}
        </Layer>
        <Layer type="symbol" id="marker-selected" layout={{ "icon-image": "circle-15" }}>
          <Feature
            coordinates={[building.longitude, building.latitude]}
          />
        </Layer>
      </div>
    )
  }

}

export default Map;
