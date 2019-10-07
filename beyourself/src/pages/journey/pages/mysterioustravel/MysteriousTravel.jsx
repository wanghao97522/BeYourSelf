import React, { Component } from 'react'
import { Body, Bg, Title , DegreeOfCompletion, Done , Word, TaskList, Task, Point } from './m_travel';
import heshui from 'assets/images/journey/heshui-jiesuo@2x.png'
import zaocan from 'assets/images/journey/zaocan-weijiesuo@2x.png'
import yundong from 'assets/images/journey/yundong-weijiesuo@2x.png'
import tiaozhan from 'assets/images/journey/tiaozhan-weijiesuo@2x.png'
import mixing from 'assets/images/journey/mixing-weijiesuo@2x.png'

export default class MysteriousTravel extends Component {
    render() {
        return (
            <Body>
                <Bg>
                    <Title></Title>

                    <DegreeOfCompletion>
                        <Done>
                            <Word>0%</Word>
                            <Word>完成</Word>
                        </Done>
                        <Done>
                            <Word>0/15</Word>
                            <Word>成就实现</Word>
                        </Done>
                    </DegreeOfCompletion>

                    <TaskList>
                        <Task onClick={this.handleClick.bind(this)}><img src={heshui} alt="" style={{height:'100%',
            width: '100%'}}/></Task>
                        <Done>
                            <Word>喝水</Word>
                            <Word>1/5成功</Word>
                        </Done>
                        <Point></Point>
                        <Point></Point>
                        <Point></Point>
                        <Task><img src={zaocan} alt="" style={{height:'100%',
            width: '100%'}}/></Task>
                        <Done>
                            <Word>优质早餐</Word>
                            <Word>未解锁</Word>
                        </Done>
                        <Point></Point>
                        <Point></Point>
                        <Point></Point>
                        <Task><img src={yundong} alt="" style={{height:'100%',
            width: '100%'}}/></Task>
                        <Done>
                            <Word>随性舞动您的成功</Word>
                            <Word>未解锁</Word>
                        </Done>
                        <Point></Point>
                        <Point></Point>
                        <Point></Point>
                        <Task><img src={tiaozhan} alt="" style={{height:'100%',
            width: '100%'}}/></Task>
                        <Done>
                            <Word>黄金挑战</Word>
                            <Word>未解锁</Word>
                        </Done>
                        <Point></Point>
                        <Point></Point>
                        <Point></Point>
                        <Task><img src={mixing} alt="" style={{height:'100%',
            width: '100%'}}/></Task>
                        <Done>
                            <Word>密信</Word>
                            <Word>未解锁</Word>
                        </Done>
                    </TaskList>
                </Bg>
            </Body>
        )
    }
    handleClick(){
        console.log(1)
    }
}
