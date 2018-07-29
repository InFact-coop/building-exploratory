import React, { Component } from 'react';
import optimiseImage from '../utils/optimiseImage';

class BuildingCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hovering: false
    }
  }

  onHover = () => {
    this.setState({
      hovering: !this.state.hovering
    });
  }

  render() {
    const { building, handleBuildingDetails } = this.props;

    const optimisedImg = optimiseImage(building.featured_image, 'c_scale,q_50,w_250');

    const imgStyle = {
      backgroundImage: `url(${optimisedImg})`,
      width: "100%",
      height: "16rem"
    }

    const buildingName = building.building_name ? building.building_name : `${building.street_number} ${building.street_name}`;
    return (
      <div
        ref={this.props.inputRef}
        id={building.id}
        className={`${this.state.hovering ? 'b--primary-50' : 'b--primary'} ba bw1 w5 mw5 ma2 mt1`}
        onMouseEnter={() => { this.onHover(); }}
        onMouseLeave={() => { this.onHover(); }}
        onClick={() => { this.onHover(); handleBuildingDetails(building); }}>
        <div className={`${this.state.hovering ? 'b--primary-50' : 'b--primary'} bb bw1 h3 pa3 flex justify-center items-center`}>
          <p className="ma0 tc primary b f5 ttc">{ buildingName }</p>
        </div>
        <div style={imgStyle} className="cover bg-center">
        </div>
      </div>
    )

  }
}

export default BuildingCard;
