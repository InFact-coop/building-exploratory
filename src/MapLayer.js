import React from 'react';
import { Layer, Feature } from 'react-mapbox-gl';

const MapLayer = ({ buildings, building, handleBuildingDetails }) => {

  const allMarkers = buildings && buildings.map((buildingObj, i) => {
    return (
      <Feature
        key={i}
        coordinates={[buildingObj.longitude, buildingObj.latitude]}
        onClick={(obj) => {
          handleBuildingDetails(obj, buildingObj);
        }}
      />);
  });

  return (
    <div>
      <Layer type="symbol" id="marker" layout={{ "icon-image": "circle-stroked-15" }}>
        { allMarkers }
      </Layer>
      <Layer type="symbol" id="marker-selected" layout={{ "icon-image": "circle-15" }}>
        <Feature
          coordinates={[building.longitude, building.latitude]}
        />
      </Layer>
    </div>
  )
}

export default MapLayer;