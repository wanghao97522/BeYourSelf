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
    taskList: []
  }
  render() {
    let { location } = this.props
    let className = location.search.split('?')[1]
    return (
      <BodyContainer>
        <Head className={className}></Head>
        {/* 根据任务组件传回来的任务数量来确定num值 */}
        <TaskNum
          num={this.state.taskList.length}
          taskList={this.state.taskList}
        ></TaskNum>
        <OpenBT className={className}></OpenBT>
        <Task 
          className={className}
          taskList={this.state.taskList}
        ></Task>
      </BodyContainer>
    )
  }

  componentDidMount(){
    let { location } = this.props
    let className = location.search.split('?')[1]
    if(className === 'morning'){
      this.setState({
        taskList: [
          {
            img: iconWater,
            title: '喝水',
            status: false
          }
        ]
      })
    }
  }

  
}
