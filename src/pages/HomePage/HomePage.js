import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '@components/Navigation'
import Header from '@components/Header'
import './HomePage.scss'

class HomePage extends Component {
  render () {
    return (
      <div styleName='container'>
        <Header />
        <Navigation />
        Hello from {this.props.title}!
        <Link to='/devices'>Device page</Link>
      </div>
    )
  }
}

export default HomePage
