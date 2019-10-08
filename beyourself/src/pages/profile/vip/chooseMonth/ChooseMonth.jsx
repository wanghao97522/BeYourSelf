import React, { Component } from 'react';

import {NavLink} from 'react-router-dom'

import { ChooseMonthContainer } from './styledChooseMonth'

class ChooseMonth extends Component {
    render() {
        return (
            <NavLink to='/'>
                <ChooseMonthContainer></ChooseMonthContainer>
            </NavLink>
        );
    }
}

export default ChooseMonth;