import React, { Component } from 'react'
import pathToRegExp from 'path-to-regexp'
import PropTypes from 'prop-types'
export default class Switch extends Component {
  static contextTypes = {
    location: PropTypes.object
  }
  render() {
    let children = this.props.children
    let {location: {pathname}} = this.context
    for (let i = 0, length = children.length; i < length; i++) {
      if (pathToRegExp(children[i].props.path, [], {end: false}).test(pathname)) {
        return children[i]
      }
    }
    return null
  }
}