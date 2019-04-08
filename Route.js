import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Route extends Component {
  static contextTypes = {
    location: PropTypes.object
  }
  render() {
    let { path, component: Component } = this.props
    let { location: { pathname } } = this.context

    if (pathname.startsWith(path + '/') || 
      pathname === path 
        || path === '/') {
      return <Component {...this.context} />
    } else {
      return null
    }
  }
}