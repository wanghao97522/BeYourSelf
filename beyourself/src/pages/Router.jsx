import React, { Component } from 'react'

import { Route , Switch , Redirect } from 'react-router-dom'

import Index from './Index'
import Detials from './Detials'
import Page404 from './Page404'

export default class MyRouter extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path='/detials' component={Detials} ></Route>
                    <Route path='/index' component={Index} ></Route>
                    <Redirect from='/' exact to='/index/home'></Redirect> 
                    <Route component={Page404} ></Route>
                </Switch>
            </>
        )
    }
}
