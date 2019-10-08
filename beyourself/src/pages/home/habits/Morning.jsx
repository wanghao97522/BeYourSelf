import React, { Component } from 'react'

import Head from './components/Head'
import TaskNum from './components/TaskNum'
import OpenBT from './components/OpenBT'
import Task from './components/Task'

import iconWater from 'assets/images/home/icon-shuidi@3x.png'

import { BodyContainer } from './StyledHabits'

export default class Morning extends Component {
  // 后端传入数据之后可能不是在state里的taskList，渲染要改

  state = {
    taskList: [
      {
        img: iconWater,
        title: '喝水',
        status: false
      }
    ]
  }
  render() {
    return (
      <BodyContainer>
        <Head className="morning"></Head>
        {/* 根据任务组件传回来的任务数量来确定num值 */}
        <TaskNum num={this.state.taskList.length} taskList={this.state.taskList}></TaskNum>
        <OpenBT className="morning"></OpenBT>
        <Task 
          className="morning"
          taskList={this.state.taskList}
        ></Task>
      </BodyContainer>
    )
  }

  
}
