import React, { Component } from 'react';
import { LoginContainer } from './StyledLogin'
import LiBack from '../components/back/Back'
import Ver from './ver/Ver'
import Account from './account/Acc'

import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'


// function 

export default class Login extends Component {
  state = {
    dir: 'ver',
    iptVal:'',
    isShow:false
  }
    
 render() {
    
    return (
      <LoginContainer>
          <LiBack></LiBack>
          <div className="title">账号登录</div>
          <div className="user">
            <span className={this.state.dir === "ver" ? 'active' : ''} onClick={() => this.handleClick('ver')}>使用验证码</span>
            <span className={this.state.dir === "account" ? 'active' : ''} onClick={() => this.handleClick('account')}>使用账号密码</span>
          </div>
          <Switch>
              <Redirect from="/loginindex" exact to="/login/ver"></Redirect>
              <Route path="/login/ver" component={Ver}></Route>
              <Route path="/login/account" component={Account}></Route>
          </Switch>
          <div className="goRegi" onClick={this.goRegister.bind(this)}>还没有账号？去注册</div>
         
      </LoginContainer>
    );
  }
  handleClick = (dir) => {
    this.setState({
      dir
    })

    this.props.history.push(dir === 'ver' ? '/login/ver' : '/login/account')
  }
  goRegister(){
    this.props.history.push('/register')
  }
}