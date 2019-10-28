import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Body, Bg, Title , DegreeOfCompletion, Done , Word, TaskList, Task, Point } from './m_travel';
import heshui from 'assets/images/journey/daiban-jiesuo@2x.png'
import zaocan from 'assets/images/journey/zhongyao-weijiesuo@2x.png'
import yundong from 'assets/images/journey/zhixing-weijiesuo@2x.png'
import tiaozhan from 'assets/images/journey/yingxiang-weijiesuo@2x.png'
import mixing from 'assets/images/journey/lanbaoshi-weijiesuo@2x.png'
import pressToEnter from 'assets/images/presstoenter.png'

import axios from 'axios'

import heshuibg from 'assets/images/journey/group-bj@2x.png'
import title from 'assets/images/journey/title@2x.png'


export default class MysteriousTravel extends Component {
    state={
        rA:0,
        rB:0,
    }
    render() {
        return (
            <Body display={this.props.display}>
                <Bg bgImg={heshuibg}>
                    <Title title={title}></Title>
                    <DegreeOfCompletion>
                        <Done>
                            <Word>{this.state.rB<0?0:this.state.rB}%</Word>
                            <Word>完成</Word>
                        </Done>
                        <Done>
                            <Word>{this.state.rA}/15</Word>
                            <Word>成就实现</Word>
                        </Done>
                    </DegreeOfCompletion>

                    <TaskList>
                        <NavLink to='/drink'>
                            <Task>
                                <img src={heshui} alt="" style={{height:'100%',width: '100%'}}/>
                                <div className='enter_de'>
                                    <img src={pressToEnter} alt=""/>
                                </div>    
                            </Task> 
                        </NavLink>
                        
                        <Done>
                            <Word>喝水</Word>
                            <Word>1/3成功</Word>
                        </Done>
                        <Point></Point>
                        <Point></Point>
                        <Point></Point>


                        <NavLink to='/breakfast'>
                            <Task><img src={zaocan} alt="" style={{height:'100%',width: '100%'}}/></Task>
                        </NavLink>
                        <Done>
                            <Word>优质早餐</Word>
                            <Word>未解锁</Word>
                        </Done>
                        <Point></Point>
                        <Point></Point>
                        <Point></Point>

                        <NavLink to='/dance'>
                            <Task><img src={yundong} alt="" style={{height:'100%',width: '100%'}}/></Task>
                        </NavLink>
                        <Done>
                            <Word>随性舞动您的成功</Word>
                            <Word>未解锁</Word>
                        </Done>
                        <Point></Point>
                        <Point></Point>
                        <Point></Point>

                        <NavLink to='/challenge'>
                            <Task><img src={tiaozhan} alt="" style={{height:'100%',width: '100%'}}/></Task>
                        </NavLink>
                        <Done>
                            <Word>黄金挑战</Word>
                            <Word>未解锁</Word>
                        </Done>
                        <Point></Point>
                        <Point></Point>
                        <Point></Point>

                        <NavLink to='/mixin'>
                            <Task><img src={mixing} alt="" style={{height:'100%',width: '100%'}}/></Task>
                        </NavLink>
                        <Done>
                            <Word>密信</Word>
                            <Word>未解锁</Word>
                        </Done>
                    </TaskList>
                </Bg>
            </Body>
        )
    }

    
    componentDidMount(){
        const uid = localStorage.getItem('uId')
        axios({
            method: 'get',
            url: `/api/journey/get_all_travel?uId=${uid}`
        }).then(async (res) => {
            await this.setState({
                rA: res.data.list? res.data.list[2].rA:0,
                rB: res.data.list? res.data.list[2].rB:0
            })
        })
    }
}
