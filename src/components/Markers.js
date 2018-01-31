import React, { Component } from 'react';

import { Marker } from 'react-map-gl';

import MarkerFilled from './svg/MarkerFilled';
import MarkerEmpty from './svg/MarkerEmpty';



const Markers = ({
  buildings = [], handleBuildingDetails, hoveringItem, selectedBuilding,
  goToViewport, hovering, id, selectedBuildingId
}) => {
const allMarkers = buildings.length > 0 && buildings.map((buildingObj, i) => {
  let counter = ++i;

    return (
      <Marker
      key={counter}
      longitude={buildingObj.longitude}
      latitude={buildingObj.latitude}>

      <div
        onMouseEnter={(obj) => {
          hoveringItem(counter);
        }}
        onClick={() => {
          selectedBuilding(counter);
          handleBuildingDetails(buildingObj);
          let longitude = buildingObj.longitude;
          let latitude = buildingObj.latitude;
          goToViewport({longitude, latitude});
        }}
        onTouchStart={() => {
          selectedBuilding(counter);
          handleBuildingDetails(buildingObj);
          let longitude = buildingObj.longitude;
          let latitude = buildingObj.latitude;
          goToViewport({longitude, latitude});
        }}
        onMouseLeave={(obj) => {
          hoveringItem(null);
        }}
      >

      {
        (hovering && id === counter) || selectedBuildingId === counter ? <MarkerFilled /> : <MarkerEmpty />
      }

      </div>
    </ Marker>
    )
  });

    return (
      <div>
        {allMarkers}
      </div>
    );
};

export default Markers;
