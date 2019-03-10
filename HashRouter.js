import React, {Component} from 'react'
import {Provider} from './context'

export default class HashRouter extends Component {
  constructor() {
    super()
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || '/'
      }
    }
  }
  componentDidMount() {
    window.location.hash = window.location.hash || '/'
    window.addEventListener('hashchange', e => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1)
        }
      })
    })
  }
  push(path) {
    window.location.hash = path
  }
  render() {
    let value = {
      location: {
        pathname: this.state.location.pathname
      },
      history: {
        push: this.push
      }
    }
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}