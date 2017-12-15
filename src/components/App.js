import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Map from './Map';
import BuildingDetails from './BuildingDetails';
import Nav from './Nav';
import Footer from './Footer';
import BuildingsList from './BuildingsList';
import About from './About';

const mapCenter = [-0.1058, 51.5465];
const mapZoom = 11.5;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: props.data.getBuildings,
      building: {},
      error: props.data.error,
      loading: props.data.loading,
      mapCenter: mapCenter,
      mapZoom: mapZoom,
      buildingHover: {},
      selectedBuildingRef: undefined,
      isAbout: false
    }
  }


  // check if the next prop loading === false
  // if false, update the state
  componentWillUpdate(nextProps, nextState) {
    if (!nextProps.data.loading && !nextState.buildings) {
      this.setState({
        buildings: nextProps.data.getBuildings,
        error: nextProps.data.error,
        loading: nextProps.data.loading
      })
    }
  }

   buildingDetails = (building) => {
     // user clicked a point
     // update state for a single building
     console.log(building.id)
     console.log(building.longitude)
     console.log(building.latitude)
      this.setState({
        building: building,
        mapCenter: [building.longitude, building.latitude],
        mapZoom: [15.5],
      })
    }

  closingBuildingDetails = () => {

    this.setState({
      building: {}
    })
  }

  isAboutPage = () => {
    console.log('callled isAboutPahge listener');
    this.setState({
      isAbout: !this.state.isAbout
    })


  }

  render() {

    return (
      <div>
        <Nav handleIsAboutPage={this.isAboutPage} />
        {/* logic here to display either home page or about page  */}
        { !this.state.isAbout ?

          <section>
            <div
              className="fl w-50 overflow-scroll"
              style={{ height: "calc(100vh - 4rem)" }}>
                {/* logic here to display either list view or detailed view*/}
                { !this.state.building.significance ?
                <BuildingsList
                  {...this.state}
                  handleBuildingDetails={this.buildingDetails}
                  inputRef={el => {
                    this.testElem = el;
                    if (el && el.id == this.state.selectedBuildingRef) {
                      this.testElem.scrollIntoView();
                      window.scrollBy(0, -65);
                    }
                  }}
                 /> :
                <BuildingDetails {...this.state} handleClosingBuildingDetails={this.closingBuildingDetails} />
                }
            </div>
            <div
              className="fl w-50 bl bw1 b--primary"
              style={{ height: "calc(100vh - 4rem)" }}>
              <Map
                {...this.state}
                handleBuildingDetails={this.buildingDetails} />
            </div>
          </section>
        :
        <About />
        }
        <div className="fl w-100">
          <Footer />
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
