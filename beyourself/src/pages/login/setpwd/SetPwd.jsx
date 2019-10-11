import React, { Component } from 'react'
import {SetPwdContainer} from './StyledSetPwd'
import LiBack from '../components/back/Back'
import PwdIpt from '../components/pwdipt/PwdIpt'
import LiButton from '../components/button/Button'
import dakai from 'assets/images/login/dakai2@x.png'
import guanbi from 'assets/images/login/guanbi2@x.png'

export default class Verification extends Component {
    constructor(){
        super()
        this.state = {
          iptValone:'1',
          iptValtwo:'1',
          isShow:true,
          getCodeChange:false,
          showPwd:false,
          eyesstate:false
        }
      }
     render() {
        //  if(this.state.getCodeChange){
        //      reget = (
        //      <div></div>
        //      )
        //  }
        return (
          <SetPwdContainer>
              <LiBack></LiBack>
              <h2>设置密码</h2>
              <h4>密码最少6位，可由数字、字母或常用符号组成</h4>
              <PwdIpt  getPwd={this.getPwdone.bind(this)} onClick={this.handlePwd.bind(this)} eyes={this.state.eyesstate ? dakai : guanbi} kind={this.state.showPwd ? "text" : "password"} pretext="请输入密码"></PwdIpt>
              <PwdIpt  getPwd={this.getPwdtwo.bind(this)} onClick={this.handlePwd.bind(this)} eyes={this.state.eyesstate ? dakai : guanbi} kind={this.state.showPwd ? "text" : "password"} pretext="请再次输入密码"></PwdIpt>
              <p>{this.state.isShow ? '与第一次输入不同，请重新输入' : ''}</p>
            
              <LiButton  innertext="下一步" onClick={this.verification.bind(this)}></LiButton>
          </SetPwdContainer>
        );
      }
      componentDidMount(){
      }
      handlePwd(){
        this.setState({
            showPwd:!this.state.showPwd,
            eyesstate:!this.state.eyesstate
        })

      }
      getPwdone(e){
          
          this.setState({
            iptValone:e.target.value,
            isShow:false
          })
      }
      getPwdtwo(e){
        this.setState({
          iptValtwo:e.target.value,
          isShow:false
        })
    }
 
      handleIpt(e){
        if(e.target.value.length <= 11){
          this.setState({
            iptVal:e.target.value
          })
        }
      }
      verification(e){
          if(this.state.iptValone !== this.state.iptValtwo){
              this.setState({
                  isShow : true
              })
          }else{
              this.props.history.push('/registersucc')
          }
        }
      
}