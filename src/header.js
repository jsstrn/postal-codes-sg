import React from 'react'

export default class HeaderComponent extends React.Component {
  static defaultProps = {
    title: 'Default Heading'
  }
  static propTypes = {
    title: React.PropTypes.string.isRequired
  }
  render () {
    return (
      <header>
        <h1>{this.props.title}</h1>
      </header>
    )
  }
}
