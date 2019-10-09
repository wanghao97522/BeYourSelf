import React, { Component } from 'react'

import {TaskContainer, EmptyTaskContainer} from '../StyledHabits'

import iconFalse from 'assets/images/home/icon-dakaweichenggong@3x.png'
import iconTrue from 'assets/images/home/icon-daqiachenggong@3x.png'

export default class Task extends Component {
  
  render() {
    let { taskList } = this.props
    return (
      taskList.length > 0 ? (
        <TaskContainer>
          {
            taskList.map((value, index)=>{
              return(
                <div key={value.title}>
                  <img className="icon-task" src={value.img} alt=""/>
                  <span>{value.title}</span>
                  <img className="icon-status" src={value.status ? iconTrue : iconFalse} alt=""/>
                </div>
              )
            })
          }
        </TaskContainer>
      ):(
        <EmptyTaskContainer>
          <p>快来添加任务吧</p>
        </EmptyTaskContainer>
      )
    )
  }

  
}
