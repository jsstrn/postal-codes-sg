import React from 'react'
import ResultComponent from './result'
import 'whatwg-fetch'

export default class MainComponent extends React.Component {
  state = {
    results: []
  }

  getURL (query) {
    const parameter = '?&address=' + encodeURI(query)
    return 'http://maps.googleapis.com/maps/api/geocode/json' + parameter
  }

  getPostalCode (event) {
    event.preventDefault()
    let query = document.querySelector('input').value
    query = (!query.match(/singapore/i)) ? query + ' singapore' : query
    const url = this.getURL(query)
    window.fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'OK') this.formatData(data)
        else console.log('Could not get results, please try again later.')
      })
      .catch((err) => console.log(err))
  }

  formatData (data) {
    console.log(data)
    const results = []
    data.results.forEach((result) => {
      results.push({
        postal_code: result.address_components[5].long_name,
        address: result.formatted_address,
        lat: result.geometry.location.lat,
        lng: result.geometry.location.lng
      })
    })
    console.log(results)
  }

  render () {
    const components = []
    const component = <ResultComponent data={5} />
    components.push(component)
    return (
      <main>
        <form onSubmit={this.getPostalCode.bind(this)}>
          <input type='text' defaultValue='1 Keong Saik Road' />
          <button type='submit'>Get Postal Code</button>
        </form>
        <ResultComponent data={'hi'} />
      </main>
    )
  }
}
