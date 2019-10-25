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
                    一个美妙的夜晚
                </div>
                <div className="top">其中</div>
                <div className="middle">学习如何获得高质量的夜间睡眠</div>
                <NavLink to="/index/journey/2">
                    <div className="bottom"><img src={play} alt=""/></div> 
                </NavLink>
            </Container>
        )
    }
    back(){
        this.props.history.goBack();
    }
}