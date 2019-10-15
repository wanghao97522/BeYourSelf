import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { 
    BodyContainer, 
    HeadContainer, 
    CubeOneContainer, 
    MainContainer, 
    CubeTwoContainer, 
    TodayContainer, 
    EmptyContainer 
} from './StyledHome'

import Habit from './components/Habit'

import iconAdd from 'assets/images/home/icon-tianjia@3x.png'

export default class Home extends Component {
    state = {
        habitsList: [
            {
                hid: 0,
                time: '7:00 上午',
                habitName: '早晨习惯'
            },
            {
                hid: 1,
                time: '2:00 下午',
                habitName: '下午习惯'
            },
            {
                hid: 2,
                time: '6:00 下午',
                habitName: '黄昏习惯'
            }
        ]
    }
    render() {
        return (
            <BodyContainer>
                <HeadContainer>
                    <div className="head-index">主页</div>
                    {/* 跳转到添加新的习惯 */}
                    <NavLink to="/newhabit">
                        <img src={iconAdd} alt=""/>
                    </NavLink>
                </HeadContainer>
                <MainContainer>
                    <CubeOneContainer>
                        {/* 跳转到旅程中的喝水 */}
                        <NavLink to="/challenge">
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
                        {/* 一封信跳转 */}
                        <NavLink to="/letter">
                            <h1>开启您的一天</h1>
                            <p>要如何弃旧迎新培养好习惯，并锻炼出坚韧的意志？</p>
                            <div>戳我查看</div>
                        </NavLink>
                    </CubeTwoContainer>
                    <TodayContainer>
                        <h1 className="today">今天</h1>
                        <span></span>
                    </TodayContainer>
                    {
                        this.state.habitsList.map((value, index)=>{
                            return (
                                <Habit
                                    habit={value}
                                    key={index}
                                ></Habit>
                            )
                        })
                    }
                    {/* <Habit onClick={()=>this.handleClick()}></Habit>
                    <Habit className="noon"></Habit>
                    <Habit className="afternoon"></Habit> */}
                    <EmptyContainer></EmptyContainer>
                </MainContainer>
            </BodyContainer>
        )
    }

    handleClick(className){
        
    }
}
