import React from 'react'

export default class HeaderComponent extends React.Component {
  propTypes () {
    return {
      title: React.PropTypes.string
    }
  }
  render () {
    return (
      <header>
        <h1>{this.props.title}</h1>
      </header>
    )
  }
}
