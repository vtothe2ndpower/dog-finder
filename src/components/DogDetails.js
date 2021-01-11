import React, { Component } from 'react'

class DogDetails extends Component {
  render() {
    let { dog } = this.props;
    return (
      <div>
        <h1>{dog.name}</h1>
      </div>
    )
  }
}

export default DogDetails;