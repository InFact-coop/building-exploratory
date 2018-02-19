import React, { Component } from 'react';

// componentWillMount


class UpdateData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isUpdating: false,
      error: null,
      data: [],
      updatedSuccessfully: null
    }
  }

  handleUpdatingData = () => {
    this.setState({
      isUpdating: true
    }, () => {
      console.log(this.state.isUpdating, 'is updating')
      fetch(`/api/push-latest-changes-from-google-sheet`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data =>  {
        this.setState({
          isUpdating: false,
          updatedSuccessfully: true
        })
        console.log(data, '<<<< data')
        console.log(this.state.updatedSuccessfully, 'updated')
      })
      .catch(err => console.log(err, 'error updating data'));
    })
  }


  render () {
    return (
      <div>
      <header className="float w-100 h3 flex justify-between items-center bb b--primary bw1">
        <div className="flex items-center">
          <p className="f2-l f4 pt1 ma0 pl2 primary fw8"> Islington Local List: Admin Area </p>
        </div>
      </header>
      <main className="flex flex-column vh-50 items-center justify-center">
        <p className="primary">Click below to populate the site with data from the database</p>
        <div onClick={ () => this.handleUpdatingData() } className="bg-primary white f1 pointer pv2 ph4"> Update Data </div>
      </main>
      </div>
    )
  }
}

export default UpdateData;
