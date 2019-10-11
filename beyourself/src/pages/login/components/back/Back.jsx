import React, { Component } from 'react';
import {BackContainer} from './StyledBack'
import {withRouter } from 'react-router-dom'
class Back extends Component {
 render() {
    return (
      <BackContainer>
          <header>
              <div onClick={this.handleClick.bind(this)}>
              </div>
          </header>
      </BackContainer>
    );
  }
  handleClick(){
    // console.log(this)
    this.props.history.goBack()
  }
}
export default withRouter(Back)