import React, { Component } from 'react'

import Heshui from './pages/heshui/MysteriousTravel';
import Night from './pages/night/MysteriousTravel';
import Focus from './pages/focus/MysteriousTravel';
import Healthy from './pages/healthy/MysteriousTravel';

export default class Journey extends Component {
    render() {
        const pos = parseInt(this.props.match.params.id);
        console.log(typeof pos);
        return (
            <>
               <Heshui display={pos}></Heshui> 
               <Night display={pos}></Night>
               <Focus display={pos}></Focus>
               <Healthy display={pos}></Healthy>
            </>
            
        )
    }
}
