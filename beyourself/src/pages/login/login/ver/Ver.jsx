import React, { Component } from 'react';
import Ipt from '../../components/ipt/Ipt'
import {VerContainer} from './StyledVer'
import LiButton from '../../components/button/Button'
import { Toast} from 'antd-mobile';

export default class Ver extends Component {
    constructor(){
        super()
        this.state = {
          iptVal:'',
          isShow:false
        }
      }
       showToast() {
        Toast.info('This is a toast tips !!!', 1);
      }
 render() {
    return (
      <VerContainer>
          <Ipt text="+86" pretext="请输入手机号" handleIpt={this.handleIpt.bind(this)}></Ipt>
          <p>{this.state.isShow ?  '手机号验证失败' : ''}</p>
          <div className="btn">
            <LiButton innertext="登录" onClick={this.verification.bind(this)}></LiButton>
          </div>
      </VerContainer>
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
      Toast.info('登陆成功', 1);
      this.props.history.push({pathname:"/verification",state:{phoneNum:this.state.iptVal}})
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