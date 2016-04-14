const React = require('react')
const ReactDOM = require('react-dom')

class HeaderComponent extends React.Component {
  render () {
    return (
      <header>
        <h1>Postal Codes - Singapore</h1>
      </header>
    )
  }
}

class ResultsComponent extends React.Component {
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

class MainComponent extends React.Component {
  getURL (query) {
    var parameter = '?&address=' + encodeURI(query)
    return 'http://maps.googleapis.com/maps/api/geocode/json' + parameter
  }
  getPostalCode (event) {
    console.log('it works')
    event.preventDefault()
    var query = document.querySelector('input').value
    query = (!query.match(/singapore/i)) ? query + ' singapore' : query
    var url = this.getURL(query)
    console.log(url)
    var req = new window.XMLHttpRequest()
    req.addEventListener('load', function () {
      var data = JSON.parse(this.responseText)
      if (data.status === 'OK') {
        window.localStorage.clear()
        var result = data.results[0]
        window.localStorage.setItem('data', JSON.stringify(result))
      } else console.log('Unable to fetch data')
    })
    req.open('GET', url)
    req.send()
  }
  render () {
    return (
      <main>
        <form onSubmit={this.getPostalCode.bind(this)}>
          <input type='text' value='1 Keong Saik Road' />
          <button type='submit'>Get Postal Code</button>
        </form>
        <ResultsComponent />
      </main>
    )
  }
}

class FooterComponent extends React.Component {
  render () {
    return (
      <footer>
        <p>Copyright (c) 2016</p>
      </footer>
    )
  }
}

const app = document.getElementById('app')
ReactDOM.render(
  <div>
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
  </div>, app)

/*
<header>
  <h1>Postal Codes - Singapore</h1>
</header>
<main>
  <form>
    <input type="text" value="1 keong saik road">
    <button type="submit">Find</button>
  </form>
  <div class="box">
    <p>Address: <span>1 Keong Saik Road</span></p>
    <p>Postal Code: <span>089109</span></p>
    <p>Lat: <span>123456789</span></p>
    <p>Lng: <span>123456789</span></p>
  </div>
</main>
<footer>
  <p>Copyright (c) 2016</p>
</footer>
*/
