import React from 'react'

export default class ResultComponent extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  }

  render () {
    return (
      <div className=''>
        <p>Address: <span>{this.props.data.address}</span></p>
        <p>Postal Code: <span>{this.props.data.postal_code}</span></p>
        <p>Lat: <span>{this.props.data.lat}</span></p>
        <p>Lng: <span>{this.props.data.lng}</span></p>
      </div>
    )
  }
}
