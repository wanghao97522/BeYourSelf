import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Body, Bg, Title , DegreeOfCompletion, Done , Word, TaskList, Task, Point } from './m_travel';
import heshui from 'assets/images/journey/shuimian-jieuso@2x.png'
import zaocan from 'assets/images/journey/tiantang-weijiesuo@2x.png'
import yundong from 'assets/images/journey/anjing-weijiesuo@2x.png'
import tiaozhan from 'assets/images/journey/ganen-weijiesuo@2x.png'
import mixing from 'assets/images/journey/mixing-weijiesuo@2x.png'
import pressToEnter from 'assets/images/presstoenter.png'

import axios from 'axios'

import shuimian from 'assets/images/journey/shuimian-bj@2x.png'
import title from 'assets/images/journey/title@2x.png'


export default class MysteriousTravel extends Component {
    state={
        rB:0,
    }
    render() {
        return (
            <Body display={this.props.display}>
                <Bg bgImg={shuimian}>
                    <Title title={title}></Title>
                    <DegreeOfCompletion>
                        <Done>
                            <Word>{this.state.rB}%</Word>
                            <Word>完成</Word>
                        </Done>
                        <Done>
                            <Word>0/15</Word>
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
                            <Word>1/5成功</Word>
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
        const uid = 1
        // const uid = localStorage.getItem('uId')
        axios({
            method: 'get',
            url: `/api/journey/get_all_travel?uId=${uid}`
        }).then(async (res) => {
            console.log(res.data.list[0].rImgmax);
            await this.setState({
                rB: res.data.list[0].rB
            })
        })
    }
}
