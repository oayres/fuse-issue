import React, { Component } from 'react'
import store from '../../stores/NavigationStore'
import './Navigation.scss'

class Navigation extends Component {
  static fetchData () {
    return {
      title: store.fakeFetch(),
      example: store.fakeFetch2()
    }
  }

  render () {
    return (
      <div styleName='container'>
        Hello from {this.props.title}!
        Hello from {this.props.example}!
      </div>
    )
  }
}

export default Navigation
