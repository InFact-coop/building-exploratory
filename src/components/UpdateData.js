import React, { Component } from 'react';

// componentWillMount


class UpdateData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isUpdating: false,
      error: null,
      data: []
    }
  }

  handleUpdatingData = () => {
    fetch(`/api/push-latest-changes-from-google-sheet`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data =>  console.log(data, '<<<< data'))
      .catch(err => console.log(err, 'error updating data')); // we don't get in here
  }


  render () {
    return (
      <div>
        Hello World
        <div onClick={ () => this.handleUpdatingData() } className="bg-gray"> Update Data </div>
      </div>
    )
  }
}

export default UpdateData;
