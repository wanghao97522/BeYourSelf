import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { Container, Title, Travel, TravelItem } from './all_travel' 

import goBack from 'assets/images/return@2x.png'
import trip from 'assets/images/journey/trip@2x.png'
import yewan from 'assets/images/journey/yewan@2x.png'
import healthy from 'assets/images/journey/healthy@2x.png'
import focus from 'assets/images/journey/focus@2x.png'

export default class AllTravel extends Component {
    render() {
        return (
            <Container>
                <Title style={{height:'.43rem',borderBottom:'1px solid #E4E4E4',paddingTop:".1rem"}}>
                    <div onClick={()=>this.back()}><img src={goBack} alt=""/></div>
                    <div className='title'>旅程</div>
                </Title>
                <Travel>
                    <p>当前旅程</p>
                    <NavLink to='index/journey'><TravelItem style={{background:`url(${trip}) no-repeat center top / 100%`}}></TravelItem></NavLink>
                    <TravelItem style={{background:`url(${yewan}) no-repeat center top / 100%`}}></TravelItem>
                    <TravelItem style={{background:`url(${focus}) no-repeat center top / 100%`}}></TravelItem>
                    <TravelItem style={{background:`url(${healthy}) no-repeat center top / 100%`}}></TravelItem>
                </Travel>
            </Container>
        )
    }
    back(){
        this.props.history.goBack('/');
    }
}
