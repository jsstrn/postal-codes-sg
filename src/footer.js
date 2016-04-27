const React = require('react')

class FooterComponent extends React.Component {
  render () {
    return (
      <footer>
        <p>{this.props.copyright}</p>
      </footer>
    )
  }
}

module.exports = FooterComponent
