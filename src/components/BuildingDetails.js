import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GridIcon from './svg/GridIcon';
import Education from './svg/Education';
import Home from './svg/Home';
import Industrial from './svg/Industrial';
import Other from './svg/Other';
import Public from './svg/Public';
import Shop from './svg/Shop';
import Worship from './svg/Worship';
import Location from './svg/Location';

class BuildingDetails extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollIntoView()
    window.scrollBy(0, -65);
  }

  render() {

    const { building, handleClosingBuildingDetails } = this.props;
    const {
    street_number,
      street_name,
      postcode,
      ward,
      conservation_area,
      date_built_actual,
      date_built_estimate,
      architectural_style,
      building_type,
      current_use,
      description,
      date_local_listing,
      significance,
      recommendation,
      latitude,
      longitude,
      featured_image,
      second_image,
      third_image,
      fourth_image,
      fifth_image
   } = building;

    return (
      <main className="pa4 primary">
        <header>
          <div>
            <div className="tr" role="button" onClick={() => { handleClosingBuildingDetails() }}>
              <GridIcon />
            </div>
            <div>

              <div className="flex items-end mb4">
                {
                  <div>
                    <Home />
                    <Education />
                    <Industrial />
                    <Other />
                    <Public />
                    <Shop />
                    <Worship />
                  </div>
                }
                <div className="pl3">
                  <h2 className="ma0 f3 ttc">{
                    // TODO
                    // if buildingname then show that else show stree name and things
                    street_number} {street_name}
                  </h2>
                  <h4 className="ma0 tt4 fw5 f5"> <span> <Location /> </span> {postcode} </h4>
                </div>
              </div>


            </div>
          </div>
        </header>

        <section>
          <h4 className="ma0 primary f5 b"> Historic Significance </h4>
          <p>{significance || 'N/A'}</p>
        </section>
        <section className="flex flex-column">
          <div className="flex">
            <div className="w-50">
              <p className="b"> Date Built </p>
              <p> {date_built_actual || 'N/A'} </p>
            </div>
            <div className="w-50">
              <p className="b"> Building Type </p>
              <p> {building_type || 'N/A'} </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-50">
              <p className="b"> Conservation Area </p>
              <p> {conservation_area || 'N/A'} </p>
            </div>
            <div className="w-50">
              <p className="b"> Architectural Style </p>
              <p> {architectural_style || 'N/A'} </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-50">
              <p className="b"> Date of Local Listing </p>
              <p> {date_local_listing || 'N/A'} </p>
            </div>
            <div className="w-50">
              <p className="b"> Current Use </p>
              <p> {current_use || 'N/A'} </p>
            </div>
          </div>
        </section>

        <section>
          <h4 className="ma0 f5 b"> Description  </h4>
          <p>{description}</p>
        </section>

        <section>

          <img className="ba b--primary bw1" alt="" src={featured_image} />
          {
            second_image &&
            <img className="ba b--primary bw1" alt="" src={second_image} />
          }
          {
            third_image &&
            <img className="ba b--primary bw1" alt="" src={third_image} />
          }
          {
            fourth_image &&
            <img className="ba b--primary bw1" alt="" src={fourth_image} />
          }
          {
            fifth_image &&
            <img className="ba b--primary bw1" alt="" src={fifth_image} />
          }
        </section>
      </main>
    );
    
  }
}

export default BuildingDetails;
