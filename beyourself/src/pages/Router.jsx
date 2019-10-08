import React, { Component } from 'react'

import { Route , Switch , Redirect } from 'react-router-dom'

import Index from './Index'
import Details from './Details'
import Page404 from './Page404'

//profile的组件
import Setting from './profile/setting/Setting'
import AboutUs from './profile/aboutUs/AboutUs'
import Vip from './profile/vip/Vip'

export default class MyRouter extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path='/details' component={Details} ></Route>
                    <Route path='/index' component={Index} ></Route>

                    {/* profile的路由 */}
                    <Route path='/setting' component={Setting} ></Route>
                    <Route path='/aboutus' component={AboutUs}></Route>
                    <Route path='/vip' component={Vip}></Route>


                    <Redirect from='/' exact to='/index/home'></Redirect> 
                    <Route component={Page404} ></Route>
                </Switch>
            </>
        )
    }
}
