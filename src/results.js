import React from 'react'

export default class ResultsComponent extends React.Component {
  render () {
    return (
      <div className=''>
        <p>Address: <span>1 Keong Saik Road</span></p>
        <p>Postal Code: <span>089109</span></p>
        <p>Lat: <span>ABCDEFG</span></p>
        <p>Lng: <span>123456789</span></p>
      </div>
    )
  }
}
