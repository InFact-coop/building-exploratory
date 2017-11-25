import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Map from "./Map";
import BuildingDetails from "./BuildingDetails";
import Nav from "./Nav";
import BuildingsList from "./BuildingsList";

const mapCenter = [-0.1058, 51.5465];
const mapZoom = [12];

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     buildings: props.data.getBuildings,
  //     building: {},
  //     error: props.data.error,
  //     loading: props.data.loading,
  //     mapCenter: mapCenter,
  //     mapZoom: mapZoom
  // buildingHover: {}
  // };
  // }

  // check if the next prop loading === false
  // if false, update the state
  // componentWillUpdate(nextProps, nextState) {
  //   if (!nextProps.data.loading && !nextState.buildings) {
  //     this.setState({
  //       buildings: nextProps.data.getBuildings,
  //       error: nextProps.data.error,
  //       loading: nextProps.data.loading
  //     });
  //   }
  // }

  // buildingDetails = (eventHandler, building) => {
  //   // console.log("you called me.....");
  //   // user clicked a point
  //   // update state for a single building
  //   if (eventHandler === "onClick") {
  //     this.setState({
  //       building: building,
  //       mapCenter: [building.longitude, building.latitude],
  //       mapZoom: [15.5]
  //     });
  //   } else if (eventHandler === "onMouseEnter") {
  //     console.log("hellooo");
  //     this.setState({ buildingHover: building }, () => {
  //       console.log("new state", this.state.buildingHover);
  //     });
  //   } else if (eventHandler === "onMouseLeave") {
  //     this.setState({ buildingHover: {} }, () => {
  //       console.log("new state", this.state.buildingHover);
  //     });
  //   }
  // };

  render() {
    // console.log(this.state.buildingHover);
    if (this.props.data.loading) return <div />;
    return (
      <div>
        <Nav />
        <div className="fl w-50" style={{ height: "calc(100vh - 4rem)" }}>
          {/* <Map {...this.state} handleBuildingDetails={this.buildingDetails} /> */}
          <Map data={this.props.data} />
        </div>
        <div
          className="fl w-50 overflow-scroll"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          {/* logic here to display either list view or detailed view*/}
          {/*
            {!this.state.building.significance
            ? <BuildingsList buildings={this.state.buildings} />
            : <BuildingDetails building={this.state.building} />
          }
          */}
        </div>
      </div>
    );
  }
}

const query = gql`
  {
    getBuildings {
      id
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
      featured_image
      second_image
      third_image
      fourth_image
      fifth_image
    }
  }
`;
const AppContainer = graphql(query)(App);

export default AppContainer;
