import React, { Component } from 'react';
import Ipt from '../../components/ipt/Ipt'
import {AccountContainer} from './StyledAcc'
import LiButton from '../../components/button/Button'

export default class Ver extends Component {
    constructor(){
        super()
        this.state = {
          iptVal:'',
          isShow:false
        }
      }
 render() {
    return (
      <AccountContainer>
          <Ipt text="+86" pretext="请输入手机" handleIpt={this.handleIpt.bind(this)}></Ipt>
          <Ipt text="密码" pretext="请输入密码"></Ipt>
          <p>{this.state.isShow ?  '手机号验证失败' : ''}</p>
          <div className="btn">
            <LiButton innertext="下一步" onClick={this.verification.bind(this)}></LiButton>
          </div>
      </AccountContainer>
    );
  }
  verification(e){
    let value =this.state.iptVal
    let reg = /^1[3|4|5|8]\d{9}$/
    // console.log(value)
    if(!reg.test(value)){
      this.setState({
        isShow:true
      })
    }else{
      this.props.history.push('/index/profile')
    }
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
}