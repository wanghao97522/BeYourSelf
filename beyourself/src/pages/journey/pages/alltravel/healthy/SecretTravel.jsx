import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { Container, Title } from './secret_travel' 

import chahao from 'assets/images/chahao@2x.png'
// import wenzi from 'assets/images/journey/wenzi@2x.png'
import play from 'assets/images/journey/play@2x.png'


export default class AllTravel extends Component {
    render() {
        return (
            <Container>
                <Title style={{height:'.43rem',paddingTop:".1rem"}}>
                    <div onClick={()=>this.back()}><img src={chahao} alt=""/></div>
                </Title>
                <div className="title" style={{color:'white',fontSize:'.22rem'}}>
                    拥抱健康的饮食
                </div>
                <div className="top">其中</div>
                <div className="middle">学习如何在不计算热量的情况下减肥</div>
                <NavLink to="/index/journey/4">
                    <div className="bottom"><img src={play} alt=""/></div> 
                </NavLink>
                
            </Container>
        )
    }
    back(){
        this.props.history.goBack();
    }
}