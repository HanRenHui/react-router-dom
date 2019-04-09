import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pathToRegExp from 'path-to-regexp'
export default class Route extends Component {
  static contextTypes = {
    location: PropTypes.object,
    history: PropTypes.object
  }
  constructor(props) {
    super(props)
    let keys = []
    this.pathReg = pathToRegExp(props.path, keys, {end: false})
    // [id, age]
    this.keys = keys.map(key => key.name)
  }
  render() {
    let { path, component: Component } = this.props
    let { location: { pathname } } = this.context
    let result = pathname.match(this.pathReg)
    if (result) {
      let match = {
        path,
        url: pathname, 
        exact: true,
        params: this.keys.reduce((pre, next, index) => {  
          pre[next] = result[index+1]
          return pre
        }, {})
      }
      return <Component {...this.context} match={match}/>      
    } else {
      return null
    }
  }
}