/*globals React, ReactDOM*/
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
        <p>Lat: <span>123456789</span></p>
        <p>Lng: <span>123456789</span></p>
      </div>
    )
  }
}

class MainComponent extends React.Component {
  render () {
    return (
      <main>
        <form>
          <input type='text' value='1 keong saik road' />
          <button type='submit'>Find</button>
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
