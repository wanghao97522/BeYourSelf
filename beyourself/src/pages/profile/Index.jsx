import React, { Component } from 'react';

import { Route } from 'react-router-dom'
 
import Profile from './Profile'
import Setting from './setting/Setting'
class Index extends Component {
    render() {
        let {match} = this.props
        return (
            <>
                <Route path={`${match.path}/profile`} component={Profile}></Route>
                <Route path={`/setting`} component={Setting}></Route>
            </>
        );
    }
}

export default Index;