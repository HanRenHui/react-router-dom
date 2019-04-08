import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class HashRouter extends Component {
  static childContextTypes = {
      location: PropTypes.object
  }
  getChildContext() {
    return {
      location: {pathname: window.location.hash.slice('1')}
    }
  }
  componentDidMount() {
    window.location.hash = window.location.hash ? window.location.hash : '/'
    const render = () => {
      this.setState({})
    }
    window.addEventListener('hashchange', render)
  }
  render() {
    return this.props.children
  }
}