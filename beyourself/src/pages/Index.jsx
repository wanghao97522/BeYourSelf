import React, { PureComponent } from 'react'

import { Container , Main , Footer } from './index_css'

import { Route , NavLink } from 'react-router-dom'

import './index.css'

import Home from './home/Home'
import Growing from './growing/Growing'
import Journey from './journey/Journey'
import Profile from './profile/Profile'


export default class Index extends PureComponent {
    render() {
        let { match } = this.props
        // console.log(this.props.location)
        return (
            <Container>
                <Main>
                    <Route path={`${match.path}/home`} component={Home} ></Route>
                    <Route path={`${match.path}/growing`} component={Growing} ></Route>
                    <Route path={`${match.path}/journey`} component={Journey} ></Route>
                    <Route path={`${match.path}/profile`} component={Profile} ></Route>
                    {/* <Redirect to={`${match.path}/home`} ></Redirect>     */}
                </Main>
                <Footer>
                    <NavLink className='normal' to={`${match.path}/home`}>
                        <div className={this.props.location.pathname==='/index/home' ? "home" : "home_active"}></div>
                    </NavLink>
                    <NavLink className='normal' to={`${match.path}/growing`}>
                        <div className={this.props.location.pathname==='/index/growing' ? "growing" : "growing_active"}></div>
                    </NavLink>
                    <NavLink className='normal' to={`${match.path}/journey`}>
                        <div className={this.props.location.pathname==='/index/journey' ? "journey" : "journey_active"}></div>
                    </NavLink>
                    <NavLink className='normal' to={`${match.path}/profile`}>
                        <div className={this.props.location.pathname==='/index/profile' ? "profile" : "profile_active"}></div>
                    </NavLink>
                </Footer>
            </Container>  
        )
    }
}
