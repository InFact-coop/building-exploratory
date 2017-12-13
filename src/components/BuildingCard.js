import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { select } from 'async';


class BuildingCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hovering: false
    }
  }

  componentDidMount() {
    console.log(this, 'buildings card')

    // let elem = this.refs;
    // console.log(elem[10], 'elem')
    // this.props.building && elem.scrollIntoView({ block: 'end', behavior: 'smooth' });
    // window.scrollBy(0, -65);
  }


  hoveringCard = () => {
    console.log('you in here????')
    this.setState({
      hovering: !this.state.hovering
    });
  }


  render() {

    const { building, handleBuildingDetails } = this.props;

    let optimisedImg = building.featured_image.split('/');
    optimisedImg.splice(6, 0, 'c_scale,q_50,w_250')
    optimisedImg = optimisedImg.join('/');

    const imgClass = {
      backgroundImage: `url(${optimisedImg})`,
      width: "100%",
      height: "20rem"
    }


    return (
      <div
        ref={this.props.inputRef}
        id={building.id}
        className={`${this.state.hovering ? 'b--primary-50' : 'b--primary'} ba bw1 w-100 w-40-ns flex-grow-1 mb4 mr4`}
        onMouseEnter={() => { this.hoveringCard(); }}
        onMouseLeave={() => { this.hoveringCard(); }}
        onClick={() => {
          const selectedBuildingRef = this.refs[building.id];
          // const position = ReactDOM
          //   .findDOMNode(this.refs['card'])
          //   .getBoundingClientRect();
          // ReactDOM.findDOMNode(building.id).scrollIntoView()
          // window.scrollBy(0, -65);
          this.hoveringCard(); handleBuildingDetails(building, selectedBuildingRef); 
          // console.log(ReactDOM
          //   .findDOMNode(this.refs['card'])
          //   .getBoundingClientRect() ); 

          }}>
        <div className={`${this.state.hovering ? 'b--primary-50' : 'b--primary'} bb bw1 pa3`}>
          <p className="ma0 tc primary b f5 ttc">{building.street_number} {building.street_name}</p>
        </div>
        <div style={imgClass} className="cover bg-center">
        </div>
      </div>
    )

  }
}

export default BuildingCard;
