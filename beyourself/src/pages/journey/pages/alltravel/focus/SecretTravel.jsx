import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { Container, Title } from './secret_travel' 

import chahao from 'assets/images/chahao@2x.png'
import play from 'assets/images/journey/play@2x.png'


export default class AllTravel extends Component {
    render() {
        return (
            <Container>
                <Title style={{height:'.43rem',paddingTop:".1rem"}}>
                    <div onClick={()=>this.back()}><img src={chahao} alt=""/></div>
                </Title>
                <div className="title" style={{color:'white',fontSize:'.22rem'}}>
                    维持在道路上的你
                </div>
                <div className="top">其中</div>
                <div className="middle">学习如何变得更加专注和更有效率</div>
                <NavLink to="/index/journey/3">
                    <div className="bottom"><img src={play} alt=""/></div> 
                </NavLink>
                
            </Container>
        )
    }
    back(){
        this.props.history.goBack();
    }
    // componentDidMount(){
    //     this.props.history.push({pathname:"/index/journey/" + 2})
    // }
}