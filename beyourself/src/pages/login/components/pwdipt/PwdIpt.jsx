import React, { Component } from 'react';
import {PwdIptContainer , BorderedContainer} from './StyledPwdipt'
export default class PwdIpt extends Component {

 render() {
    return (
      <PwdIptContainer eyes={this.props.eyes}>
          <BorderedContainer>
            <input  type={this.props.kind} onChange={this.props.getPwd} placeholder={this.props.pretext}/>
          </BorderedContainer>
          <span onClick={this.props.onClick}></span>
      </PwdIptContainer>
    );
  }
 componentDidMount(){
    //  console.log(this)
 }
}