import React from 'react';

import BuildingCard from './BuildingCard';

const BuildingsList = ({buildings = []}) => {
  const buildingCards =  buildings.map((building, i) => {
    return <BuildingCard key={i} building={building}/>
  })

  return (
    <div className="flex flex-wrap justify-between ml4 mt4">
      { buildingCards }
    </div>
  )
};

export default BuildingsList;
