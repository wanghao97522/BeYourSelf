import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Title, Container, Task } from './components/drink_comp';

import goBack from 'assets/images/return@2x.png'
import pressToEnter from 'assets/images/presstoenter@2x.png'
import carryOut from 'assets/images/duihao@2x.png'

export default class Drink extends Component {
    render() {
        return (
            <Container>
                <Title>
                    <div onClick={()=>this.back()}><img src={goBack} alt=""/></div>
                    <div className='title'>喝水</div>
                </Title>
                <NavLink to='/letter'>
                    <Task style={{marginTop:'.33rem'}}>
                        <div className='percent'>1/3</div>
                        <div className='title'>您的第1封信</div>
                        <div className='se_title'>实施您的早晨惯例</div>
                        <div className='enter'><img src={pressToEnter} alt=""/></div>
                        <div className='carryout'>阅读信件</div>
                    </Task>
                </NavLink>

                <NavLink  to='/challenge'>
                    <Task>
                        <div className='percent'>1/3</div>
                        <div className='title'>目标</div>
                        <div className='se_title'>连续3天喝水</div>
                        <div className='enter'><img src={pressToEnter} alt=""/></div>
                        <div className='carryout'>进行中</div>
                    </Task>
                </NavLink>

                <NavLink  to='/action'>
                    <Task>
                        <div className='percent' style={{backgroundColor:'#4EAF4F'}} >1/3</div>
                        <div className='title'>一次性行动</div>
                        <div className='se_title'>在你的床边放一瓶水</div>
                        <div className='enter'><img src={pressToEnter} alt=""/></div>
                        <div className='carryout' style={{color:'#4EAF4F'}}><img src={carryOut} alt=""/>完成</div>
                    </Task>
                </NavLink>

            </Container>
        )
    }
    back(){
        this.props.history.goBack()
    }
}
