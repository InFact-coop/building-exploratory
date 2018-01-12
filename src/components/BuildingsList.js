import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BuildingCard from './BuildingCard';

class BuildingsList extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { buildings = [], handleBuildingDetails } = this.props;
    const buildingCards = buildings.map((building, i) => {
      return <BuildingCard 
        key={i} 
        building={building} 
        handleBuildingDetails={handleBuildingDetails} 
        inputRef={this.props.inputRef}/>
    })

    return (
      <div className="flex flex-wrap justify-between ml4 mt4">
        {buildingCards}
      </div>
    )
  }
}

export default BuildingsList;
