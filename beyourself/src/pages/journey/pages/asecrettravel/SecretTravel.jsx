import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'

import { Container, Title } from './secret_travel' 

import chahao from 'assets/images/chahao@2x.png'
import wenzi from 'assets/images/journey/wenzi@2x.png'
import play from 'assets/images/journey/play@2x.png'


export default class AllTravel extends Component {
    render() {
        return (
            <Container>
                <Title style={{height:'.43rem',paddingTop:".1rem"}}>
                    <div onClick={()=>this.back()}><img src={chahao} alt=""/></div>
                </Title>
                <div className="title">
                    <img src={wenzi} alt=""/>
                </div>
                <div className="top">其中</div>
                <div className="middle">Y学习一整天如何保持精力充沛</div>
                <div className="bottom"><img src={play} alt=""/></div>
            </Container>
        )
    }
    back(){
        this.props.history.goBack();
    }
}