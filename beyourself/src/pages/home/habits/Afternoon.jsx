import React, { Component } from 'react'

import Head from './components/Head'
import TaskNum from './components/TaskNum'
import OpenBT from './components/OpenBT'
import Task from './components/Task'


import { BodyContainer } from './StyledHabits'

export default class Morning extends Component {
  state = {
    taskList: []
  }
  render() {
    return (
      <BodyContainer>
        <Head className="afternoon"></Head>
        {/* 根据任务组件传回来的任务数量来确定num值 */}
        <TaskNum num={this.state.taskList.length} taskList={this.state.taskList}></TaskNum>
        <OpenBT className="afternoon"></OpenBT>
        <Task 
          className="afternoon"
          taskList={this.state.taskList}
        ></Task>
      </BodyContainer>
    )
  }

  
}
