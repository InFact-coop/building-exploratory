import React, { Component } from 'react';


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
      .then(data => { console.log(data) })
  }


  componentWillMount
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