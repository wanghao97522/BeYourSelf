import React, { Component } from 'react';
import {RegisterSuccContainer} from './StyledRegisterSucc'
import LiButton from '../components/button/Button'
import { Toast} from 'antd-mobile'
import axios from 'axios'

export default class RegisterSucc extends Component {
  componentDidMount() {
    let uid = localStorage.getItem('uId')
    axios({
      method: 'post',
      url: '/api/insertall',
      data: `uId=${uid}`
    })
  }
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
    let uid = localStorage.getItem('uId')
    axios({
      method: 'post',
      url: '/api/habit/newuser',
      data: `uId=${uid}`
    }).then((result) => {
      console.log(result)
      if(result.data.flag){
        Toast.info('注册成功', 1)
        this.props.history.push('/index/profile')
      }else{
        console.log(result)
      }
    }
    )
  }
}