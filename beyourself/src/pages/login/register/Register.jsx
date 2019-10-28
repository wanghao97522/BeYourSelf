import React, { Component } from 'react';
// import {connect} from 'react-redux'
import {RegisterContainer} from './StyledRegister'
import LiBack from '../components/back/Back'
import Ipt from '../components/ipt/Ipt'
import LiButton from '../components/button/Button'
import axios from 'axios'
// import http from '../../../utils/http'
export default class Register extends Component {
  constructor(){
    super()
    this.state = {
      iptVal:'',
      isShow:false,
      isRe:false
      
    }
  }
 componentDidMount(){
    // let result = await http.get({url:'/operation'})
    // console.log(result)
    // axios.get('/operation/mobile/ajax/getIndexSquare?currPage=2')
    // .then((response) => {
    //   console.log(response)
    // })
 }
 render() {
    return (
      <RegisterContainer>
          <LiBack></LiBack>
          <h2>手机验证码登录</h2>
          <Ipt text="+86" pretext="请输入手机号" handleIpt={this.handleIpt.bind(this)}></Ipt>
          
            <p>{this.state.isShow ?  '手机号格式错误' : ''}</p>
            <p>{this.state.isRe ?  '手机号已注册' : ''}</p>
          <LiButton innertext="下一步" onClick={this.verification.bind(this)} to={{ path : ' /verification' , query : { name : 'sunny' }}}></LiButton>
      </RegisterContainer>
    );
  }
  handleIpt(e){
    this.setState({
      isShow:false,
      isRe:false
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
    let reg = /^1[3|4|5|7|8]\d{9}$/
    // console.log(value)
    if(!reg.test(value)){
      this.setState({
        isShow:true
      })
    }else{
        axios({
          method: 'post',
          url: '/api/user/ajaxNum',
          data: `uTel=${this.state.iptVal}`
        }).then((result) => {
          console.log(result)
          if(result.data.flag){
            this.props.history.push({pathname:"/verification",state:{phoneNum:this.state.iptVal,isReg:"isReg"}})
          }else{
            // console.log(result)
            // this.setState({
            //   isRe:true
            // })
          }
        }
        )
    }
  }
}
// export default connect(() => {
//   return{

//   }
// },() => {
//   return{
//     isRegister:(dispatch) => {
//       dispatch({
//         type:'isRegister'
//       })
//     }
    
//   }
// }
// )(Register)