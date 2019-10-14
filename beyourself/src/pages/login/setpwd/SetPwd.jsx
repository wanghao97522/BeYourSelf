import React, { Component } from 'react'
import ReactDOM from 'react-dom'
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
          isShow:false,
          equa:true,
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
              <PwdIpt  getPwd={this.getPwdone.bind(this)} onBlur={this.iptOnBlur} onClick={this.handlePwd.bind(this)} eyes={this.state.eyesstate ? dakai : guanbi} kind={this.state.showPwd ? "text" : "password"} pretext="请输入密码" ></PwdIpt>
              <PwdIpt  getPwd={this.getPwdtwo.bind(this)} onClick={this.handlePwd.bind(this)} eyes={this.state.eyesstate ? dakai : guanbi} kind={this.state.showPwd ? "text" : "password"} pretext="请再次输入密码" onFocus={this.inputOnFocus }></PwdIpt>
              <p>{this.state.isShow ? '密码格式错误' : ''}</p>
              <p>{this.state.equa ? '' : '与第一次输入不同，请重新输入'}</p>
              <LiButton able = {this.state.isShow} innerBg={this.state.isShow ? "#999" :""} innertext="下一步" onClick={this.verification.bind(this)}></LiButton>
          </SetPwdContainer>
        );
      }
      componentDidMount(){
        console.log(1);
        console.log(this)
        const thisDOM = ReactDOM.findDOMNode(this)
        const iptDom = thisDOM.querySelectorAll("input")
        iptDom.forEach((value,index) => {
          value.addEventListener('blur',this.onIptBlur.bind(this))
        })
        // iptDom.addEventListener('blur',this.onIptBlur)
        // console.log(thisDOM)
      }
      handlePwd(){
        this.setState({
            showPwd:!this.state.showPwd,
            eyesstate:!this.state.eyesstate
        })

      }
      onIptBlur(e){
        // console.log(e.target.value)
        let reg = /^[a-zA-Z]\w{5,17}$/
        if(!reg.test(e.target.value)){
          console.log(123)
          this.setState({
            isShow : true
        })
        }
      }
      inputOnFocus(){
        console.log(33)
      }
      iptOnBlur(){
        console.log(11)
      }
      getPwdone(e){
          
          this.setState({
            iptValone:e.target.value,
            isShow:false,
            equa:true
          })
      }
      getPwdtwo(e){
        this.setState({
          iptValtwo:e.target.value,
          isShow:false,
          equa:true
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
                  equa: false
              })
          }else{
              this.props.history.push('/registersucc')
          }
        }
      
}