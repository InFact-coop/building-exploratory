import React, { Component } from 'react';
import resizeCloudinaryImg from '../utils/resizeCloudinaryImg';

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

    const optimisedImg = resizeCloudinaryImg(building.featured_image, 'c_scale,q_50,w_250');

    const imgStyle = {
      backgroundImage: `url(${optimisedImg})`,
      width: "100%",
      height: "20rem"
    }

    return (
      <div
        className={`${this.state.hovering ? 'b--primary-50' : 'b--primary'} ba bw1 w-100 w-40-ns flex-grow-1 mb4 mr4`}
        onMouseEnter={() => { this.onHover(); }}
        onMouseLeave={() => { this.onHover(); }}
        onClick={() => { this.onHover(); handleBuildingDetails(building); }}>
        <div className={`${this.state.hovering ? 'b--primary-50' : 'b--primary'} bb bw1 pa3`}>
          <p className="ma0 tc primary b f5 ttc">{building.street_number} {building.street_name}</p>
        </div>
        <div style={imgStyle} className="cover bg-center">
        </div>
      </div>
    )

  }
}

export default BuildingCard;
