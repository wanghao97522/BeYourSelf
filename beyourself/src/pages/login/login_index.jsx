import React, { Component } from 'react'
import {connect} from 'react-redux'
import {LiContariner , TitleContainer,IntroductionContainer} from './styled_li'
import LiBack from './components/back/Back'
import LiButton from './components/button/Button'
 class login_index extends Component {
    // constructor(props){
    //     super(props)
    // }
    state = {
      count:0
    }
 render() {
    return (
      <LiContariner>
          <LiBack></LiBack>
          <TitleContainer>
              <p>从今天开始，成为更好的自己!{this.state.count}</p>
              <p>登录后解锁更多流程</p>
          </TitleContainer>
          <LiButton innertext="登录" onClick={this.nextLogin.bind(this)}></LiButton>
          <LiButton  innertext="注册" onClick={this.nextRegister.bind(this)}></LiButton>
          <IntroductionContainer>
              <p>新用户注册即送7天免费会员</p>
              <p>注册登录即同意Beyourself用户协议</p>
          </IntroductionContainer>
      </LiContariner>
    );
  }
  nextLogin(){
    this.props.history.push('/login/ver')

  }
  nextRegister(){
    //   console.log(2)
    this.props.history.push('/register')
    // console.log(this)
  }
}

export default connect((state) => {
    return {
      count:state.count
    }
  },() => {
    return {
      increment:() => {
        dispatchEvent({
          type:'increment'
        })
      }
    }
     
  }
  )(login_index)