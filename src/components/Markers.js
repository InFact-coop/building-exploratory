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
            hoveringItem(buildingObj.id);
        }}
        onClick={() => {
          selectedBuilding(buildingObj.id);
          handleBuildingDetails(buildingObj);
          let longitude = buildingObj.longitude;
          let latitude = buildingObj.latitude;
          goToViewport({longitude, latitude});
        }}
        onTouchStart={() => {
          selectedBuilding(buildingObj.id);
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
        (hovering && buildingObj.id === id) ||  buildingObj.id === selectedBuildingId  ? <MarkerFilled /> : <MarkerEmpty />
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
