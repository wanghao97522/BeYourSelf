import React, { Component } from 'react';
import {ButtonContariner} from './StyledButton'

export default class Button extends Component {
  constructor(){
    super()
    console.log(this)
  }
 render() {
    return (
      <ButtonContariner onClick={this.props.onClick}>
          <span>{this.props.innertext}</span>
      </ButtonContariner>
    );
  }
}