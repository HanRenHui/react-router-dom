import React, { Component } from 'react'
import {Consumer} from './context'
import pathToReg from 'path-to-regexp'


export default class Route extends Component {
  render() {
    return (
      <Consumer>
        {state => {
          // let pathname2 = '/user/detail/1'
          // let keys = []
          // let regs = pathToReg('user/detail/:id', [], {end: true})
          // console.log(pathname2.match(regs));
                
          let {path, component: Component} = this.props 
          let exact = this.props.exact || false
          let pathname = state.location.pathname
          let reg = pathToReg(path, [], {end: exact})
          let result = reg.test(pathname)
          if(result) {
            //每个通过路由跳转的页面都有props属性，包括match， history， location
            return <Component {...state}/>
          }
          return null 
        }}
      </Consumer>
    )
  }
}