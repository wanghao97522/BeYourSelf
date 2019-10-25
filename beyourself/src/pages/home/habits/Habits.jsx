import React, { Component } from 'react'

import Head from './components/Head'
import TaskNum from './components/TaskNum'
import OpenBT from './components/OpenBT'
import Task from './components/Task'

import iconWater from 'assets/images/home/icon-shuidi@3x.png'

import { BodyContainer } from './StyledHabits'

import http from 'utils/httpAxios'

export default class Morning extends Component {
  state = {
    taskList: []
  }
  render() {
    let { location } = this.props
    let className = location.search.split('=')[1].split('&')[0]
    return (
      <BodyContainer>
        <Head className={className}></Head>
        <TaskNum
          num={this.state.taskList.length}
          taskList={this.state.taskList}
        ></TaskNum>
        <OpenBT className={className}></OpenBT>
        <Task 
          className={className}
          taskList={this.state.taskList}
          hid={location.state}
        ></Task>
      </BodyContainer>
    )
  }

  async componentDidMount(){
    let { location } = this.props
    let className = location.search.split('=')[1].split('&')[0]
    if(className === 'morning'){
      this.setState({
        taskList: [
          {
            img: iconWater,
            tId: '1',
            tName: '喝水',
            tStatus: 1
          }
        ]
      })
    }

    let list = await http.http({
      method: 'POST',
      url: '/api/habit/task',
      data: {
          // uId: localStorage.getItem('uId'),
          uId: 1,
          hId: location.state
      }
    })

    this.setState({
      taskList: list.list
    })
  }
}
