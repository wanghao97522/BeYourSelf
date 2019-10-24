import React, { Component } from 'react';
import {FindContainer} from './StyledFind'
import LiBack from '../components/back/Back'
import Ipt from '../components/ipt/Ipt'
import LiButton from '../components/button/Button'
import axios from 'axios'
export default class Register extends Component {
  constructor(){
    super()
    this.state = {
      iptVal:'',
      isShow:false
    }
  }
 render() {
    return (
      <FindContainer>
          <LiBack></LiBack>
          <h2>找回密码</h2>
          <Ipt text="+86" pretext="请输入手机号" handleIpt={this.handleIpt.bind(this)}></Ipt>
          
            <p>{this.state.isShow ?  '手机号验证失败' : ''}</p>
          <LiButton innertext="下一步" onClick={this.verification.bind(this)}></LiButton>
      </FindContainer>
    );
  }
  handleIpt(e){
    this.setState({
      isShow:false
    })
    if(e.target.value.length <= 11){
      this.setState({
        iptVal:e.target.value
      })
    }
  }
  verification(e){
    // console.log(1)
    let value =this.state.iptVal
    let reg = /^1[3|4|5|8]\d{9}$/
    // console.log(value)
    if(!reg.test(value)){
      this.setState({
        isShow:true
      })
    }else{
      axios({
        method: 'post',
        url: '/api/user/iPhoneyzm',
        data: `uTel=${this.state.iptVal}`
      }).then((result) => {
        console.log(result)
        if(result.data.flag){
          this.props.history.push({pathname:"/verification",state:{phoneNum:this.state.iptVal,isReg:"isfind"}})
        }else{
          console.log(result)
        }
      }
      )
      // this.props.history.push({pathname:"/verification",state:{phoneNum:this.state.iptVal}})
    }
  }
}