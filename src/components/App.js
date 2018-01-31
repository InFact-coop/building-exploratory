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
import MapSwitch from './svg/MapSwitch';

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
      isAbout: false,
      mapViewMobile: true
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
    this.setState({
      isAbout: !this.state.isAbout
    })
  }

  toggleMapViewMobile = () => {
    this.setState({
      mapViewMobile: !this.state.mapViewMobile
    });
    window.scrollTo(0, -65);
  }



  render() {
    const mapClasses = (this.state.building.significance && window.innerWidth <= 960) || !this.state.mapViewMobile ? "dn" : "db";
    const mapSwitchClasses = (window.innerWidth <= 960) ? "fixed bottom-1 right-1 z-max" : "dn";

    return (
      <div>
        <Nav handleIsAboutPage={this.isAboutPage} isAbout={this.state.isAbout} />
        { !this.state.building.significance && window.innerWidth <= 960 &&
          <div onClick={() => this.toggleMapViewMobile() } className={`${mapSwitchClasses} bg-transparent`}><MapSwitch /></div>
        }
        {/* logic here to display either home page or about page  */}
        { !this.state.isAbout ?

          <section className="flex flex-column-reverse flex-row-l ">
            <div
              className="w-50-l overflow-scroll height-scroll-l">
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
            {
              <div
              className={`${mapClasses} w-50-l bl-l bw1-l b--primary height-scroll-l`}>
              <Map
              {...this.state}
              handleBuildingDetails={this.buildingDetails} />
              </div>
            }
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
      building_name
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
