import React, { Component } from 'react';
import {ButtonContariner} from './StyledButton'

export default class Button extends Component {
 render() {
    return (
      <ButtonContariner  onClick={this.props.onClick} {...this.props}>
        <button disabled={this.props.able}>
          {this.props.innertext}
        </button>
      </ButtonContariner>
    );
  }

}