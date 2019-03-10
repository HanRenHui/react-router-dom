import React, {Component} from 'react'
import { Consumer} from './context'
import pathToReg from 'path-to-regexp'
export default class Switch extends Component {
  render() {
    return (
      <Consumer>
        {state => {
          let pathname = state.location.pathname 
          
          for(let i=0; i<this.props.children.length; i++) {
            let child = this.props.children[i]
            let path = child.props.path || ''
            let reg = pathToReg(path, [], {end: false})
            if(reg.test(pathname)) {
              return child
            }
          }
          return null
          // this.props.children.forEach(child => {
          //   // console.log(child);
            
          //   // Redirect 没有path属性
          //   let path = child.props.path || ''
          //   let reg = pathToReg(path, [], {end: false})
          //     if(reg.test(pathname)) {
          //       console.log(child);
                
          //       return child
          //     }
          // })
          // return null
        }}
      </Consumer>
    )
  }
}