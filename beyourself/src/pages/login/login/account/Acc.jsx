import React, { Component } from 'react';
import Ipt from '../../components/ipt/Ipt'
import axios from 'axios'

import {AccountContainer} from './StyledAcc'
import LiButton from '../../components/button/Button'
import { Toast} from 'antd-mobile'

export default class Ver extends Component {
  constructor(){
        super()
        this.state = {
          iptVal:'',
          iptPwd:'',
          isShow:false,
          isRegister:false,
          isRight:false
        }
      }
  render() {
    // console.log(document.cookie(JSESSIONID))
  

    // let cookie = document.cookie
    // console.log(cookie)
    // var uId=document.cookie.split(";")[0].split("=")[1]; 
    // console.log(uId)
    return (
      <AccountContainer>
          <Ipt text="+86" pretext="请输入手机" handleIpt={this.handleIpt.bind(this)}></Ipt>
          <Ipt text="密码" pretext="请输入密码" handleIpt={this.handlePwd.bind(this)}></Ipt>
          <p>{this.state.isShow ?  '请输入正确的手机号' : ''}</p>
          {/* <p>{this.state.isRegister ?  '该账户未注册' : ''}</p> */}
          <p>{this.state.isRight ?  this.msg : ''}</p>
          <div className="btn">
            <LiButton innertext="登录" onClick={this.verification.bind(this)}></LiButton>
          </div>
          <p className="forget" onClick={this.gofind.bind(this)}>忘记密码？</p>
      </AccountContainer>
    );
  }
  verification(e){
    let value =this.state.iptVal
    // let pwd = this.state.iptPwd
    let reg = /^1[3|4|5|8]\d{9}$/
    // let pwdreg = /^[a-zA-Z]\w{5,17}$/
    if(!reg.test(value)){
      this.setState({
        isShow:true
      })
    }else{
      axios({
        // withCredentials:true,
        method: 'post',
        // url: '/api/user/zc/login',
        url:'/api/users/signin',
        data: `uTel=${this.state.iptVal}&uPassword=${this.state.iptPwd}`
      }).then((result) => {
        console.log(result)
        // let ck = result.headers.set-cookie
        let ck = 'uId=15'
        let value = ck.split(";")[0].split("=")[1]
        // document.cookie = 'uId=' + cok
        if(result.data.flag){
          Toast.info('登陆成功', 1)
          localStorage.setItem('uId',value)
          this.props.history.push('/index/profile')
        }else{
          this.setState({
            isRight:true
          })
          this.msg = result.data.msg
          // console.log(result.data.msg)
        }
      }
      )
    }
  }
  gofind(){
    this.props.history.push('/findpwd')
  }
  handleIpt(e){
    this.setState({
      isShow:false,
      isRight:false
    })
    if(e.target.value.length <= 11){
      this.setState({
        iptVal:e.target.value
      })
    }
  }
  handlePwd(e){
    this.setState({
      isShow:false,
      isRight:false,
      iptPwd:e.target.value
    })
  }
}