import React, { Component } from 'react'

import { Route , Switch , Redirect } from 'react-router-dom'

import Index from './Index'
import Details from './Details'
import Page404 from './Page404'
import LoginIndex from './login/login_index'
import Login from './login/login/Login'
import Register from './login/register/Register'
import Verification from './login/verification/Verification'
import SetPwd from './login/setpwd/SetPwd'
import RegSucc from './login/registersucc/RegisterSucc'
export default class MyRouter extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path='/details' component={Details} ></Route>
                    <Route path='/index' component={Index} ></Route>
                    <Route path='/loginindex' component={LoginIndex}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/verification' component={Verification}></Route>
                    <Route path='/setpwd' component={SetPwd}></Route>
                    <Route path='/registersucc' component={RegSucc}></Route>
                
                    
                    <Redirect from='/' exact to='/index/home'></Redirect> 
                    <Route component={Page404} ></Route>
                </Switch>
            </>
        )
    }
}
