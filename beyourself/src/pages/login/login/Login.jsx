import React, { Component } from 'react';
import { LoginContainer } from './StyledLogin'
import LiBack from '../components/back/Back'
// import { Tabs, WhiteSpace } from 'antd-mobile';
// import Ipt from '../components/ipt/Ipt'
// import LiButton from '../components/button/Button'

  

export default class Login extends Component {
    
 render() {
    
    return (
      <LoginContainer>
          <LiBack></LiBack>
          <h2>账号登录</h2>
      </LoginContainer>
    );
  }
}