import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { BodyContainer, HeadContainer, CubeOneContainer, MainContainer } from './StyledHome'
import Add from './components/Add'

export default class Home extends Component {
    render() {
        let { match } = this.props
        console.log(this.props)
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
                </MainContainer>
            </BodyContainer>
        )
    }
}
