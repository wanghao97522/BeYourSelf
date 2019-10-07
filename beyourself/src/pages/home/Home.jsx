import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { BodyContainer, HeadContainer, CubeOneContainer, MainContainer, CubeTwoContainer, TodayContainer, EmptyContainer } from './StyledHome'

import Add from './components/Add'
import Habit from './components/Habit'

export default class Home extends Component {
    render() {
        let { match } = this.props
        return (
            <BodyContainer>
                <HeadContainer>
                    <div className="head-index">主页</div>
                    <NavLink to={`${match.path}/newHabit`}>
                        <Add></Add>
                    </NavLink>
                </HeadContainer>
                <MainContainer>
                    <CubeOneContainer>
                        <NavLink to={'/index/journey/drinkWater'}>
                            <h1>您的旅途标签</h1>
                            <p>在一个星期内进行此项任务3次，迈向成功。</p>
                            <div className="cube-page">
                                <div>
                                    <span>1</span>
                                </div>
                                <div>
                                    <span>2</span>
                                </div>
                                <div>
                                    <span>3</span>
                                </div>
                            </div>
                        </NavLink>
                    </CubeOneContainer>
                    <CubeTwoContainer>
                        <NavLink to={`${match.path}/letter`}>
                            <h1>开启您的一天</h1>
                            <p>要如何弃旧迎新培养好习惯，并锻炼出坚韧的意志？</p>
                            <div>戳我查看</div>
                        </NavLink>
                    </CubeTwoContainer>
                    <TodayContainer>
                        <h1>今天</h1>
                        <span></span>
                    </TodayContainer>
                    <Habit className="morning"></Habit>
                    <Habit className="noon"></Habit>
                    {/* <GrayCirclContainer>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </GrayCirclContainer> */}
                    <Habit className="afternoon"></Habit>
                    <EmptyContainer></EmptyContainer>
                </MainContainer>
            </BodyContainer>
        )
    }
}
