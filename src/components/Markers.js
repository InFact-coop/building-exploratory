import React, { Component } from 'react';

import { Marker } from 'react-map-gl';

import MarkerFilled from './svg/MarkerFilled';
import MarkerEmpty from './svg/MarkerEmpty';



const Markers = ({
  buildings = [], handleBuildingDetails, hoveringItem, selectedBuilding,
  goToViewport, hovering, id, selectedBuildingId
}) => {

const allMarkers = buildings.length > 0 && buildings.map((buildingObj, i) => {
    return (
      <Marker
      key={i}
      longitude={buildingObj.longitude}
      latitude={buildingObj.latitude}>

      <div
        onMouseEnter={(obj) => {
          hoveringItem(i);
        }}
        onClick={() => {
          selectedBuilding(i);
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
        (hovering && id === i) || selectedBuildingId === i ? <MarkerFilled /> : <MarkerEmpty />
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
