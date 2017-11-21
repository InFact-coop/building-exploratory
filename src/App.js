import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Map from './Map.js';
import BuildingDetails from './BuildingDetails.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: props.data.getBuildings,
      building: {},
      error: props.data.error,
      loading: props.data.loading
    }
  }

  // check if the next prop loading === false
  // if false, update the state
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.data.loading === false && !nextState.buildings) {
      this.setState({
        buildings: nextProps.data.getBuildings,
        error: nextProps.data.error,
        loading: nextProps.data.loading
      })
    }
  }

   buildingDetails = (clickHandlerObj, building) => {
    this.setState({
      building: building
    })
  }

  render() {
    console.log(this.state, '<<<<')
    return (
      <div>
        <Map
        buildings={ this.state.buildings }
        handleBuildingDetails={ this.buildingDetails } />
        <BuildingDetails
        building={ this.state.building }/>
      </div>
    );
  }
}

const query = gql`
  {
    getBuildings {
      street_number
      street_name
      postcode
      ward
      conservation_area
      date_built_actual
      date_built_estimate
      architectural_style
      building_type
      current_use
      description
      date_local_listing
      significance
      recommendation
      latitude
      longitude
    }
  }
`;
const AppContainer = graphql(query)(App);

export default AppContainer;
