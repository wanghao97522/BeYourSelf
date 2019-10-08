import React, { Component } from 'react'

import Head from './components/Head'
import TaskNum from './components/TaskNum'
import OpenBT from './components/OpenBT'
import Task from './components/Task'

import iconWater from '../../../assets/images/home/icon-shuidi@3x.png'

import { BodyContainer } from './StyledHabits'

export default class Morning extends Component {
  render() {
    return (
      <BodyContainer>
        <Head className="morning"></Head>
        {/* 根据任务组件传回来的任务数量来确定num值 */}
        <TaskNum num="1"></TaskNum>
        <OpenBT className="morning"></OpenBT>
        <Task 
          className="morning"
          water={{
            img: iconWater,
            title: '喝水',
            status: false
          }} 
        ></Task>
      </BodyContainer>
    )
  }
}
