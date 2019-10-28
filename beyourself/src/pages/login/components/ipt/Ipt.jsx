import React, { Component } from 'react';
import {IptContainer , BorderedContainer} from './StyledIpt'
export default class Ipt extends Component {
 render() {
    
    return (
      <IptContainer>
          <span>{this.props.text}</span>
          <BorderedContainer>
            <input type={this.props.kind} maxLength="11" onChange={this.props.handleIpt} placeholder={this.props.pretext}/>
          </BorderedContainer>
      </IptContainer>
    );
  }

}