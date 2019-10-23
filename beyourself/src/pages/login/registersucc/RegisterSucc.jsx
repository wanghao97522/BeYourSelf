import React, { Component } from 'react';
import {RegisterSuccContainer} from './StyledRegisterSucc'
import LiButton from '../components/button/Button'
import { Toast} from 'antd-mobile'

export default class RegisterSucc extends Component {
 render() {
    return (
      <RegisterSuccContainer>
          <h2>注册成功</h2>
          <h4>你已成为Beyourself用户，即将开始全新的旅程。</h4>
          <LiButton innertext="让我们开始吧!" onClick={this.getStart.bind(this)}></LiButton>
          <p>在Beyourself，成为更好的自己。</p>
      </RegisterSuccContainer>
    );
  }
  getStart(){
    Toast.info('注册成功', 1)
    this.props.history.push('/index/profile')
  }
}