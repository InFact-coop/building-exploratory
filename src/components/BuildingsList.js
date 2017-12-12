import React from 'react';

import BuildingCard from './BuildingCard';

const BuildingsList = ({ buildings = [], handleBuildingDetails}) => {
  const buildingCards =  buildings.map((building, i) => {
    return <BuildingCard key={i} building={building} handleBuildingDetails={handleBuildingDetails} />
  })

  return (
    <div className="flex flex-wrap justify-between ml4 mt4">
      { buildingCards }
    </div>
  )
};

export default BuildingsList;
