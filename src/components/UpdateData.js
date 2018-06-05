import React, { Component } from 'react';

class UpdateData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isUpdating: false,
      error: null,
      message: null
    }
  }

  handleUpdatingData = () => {
    this.setState({
      isUpdating: true,
      error: null,
      message: null,
    }, () => {
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
          message: "You've successfully added the new data"
        })
      })
      .catch(err => {
        this.setState({
          isUpdating: false,
          error: true,
          message: "Error occured when uploading data"
        })
      });
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
        <div onClick={ () => this.handleUpdatingData() } className="bg-primary white f2 pointer pv2 ph4">
          {
            !this.state.isUpdating ? 'Update Data' : 'Updating...'
          }
        </div>
        <div className="primary mt3 f3 ">
          {
            this.state.message && this.state.message
          }
        </div>
      </main>
      </div>
    )
  }
}

export default UpdateData;
