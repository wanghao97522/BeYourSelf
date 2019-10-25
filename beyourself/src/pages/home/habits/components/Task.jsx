import React, { Component } from 'react'
import {TaskContainer, EmptyTaskContainer} from '../StyledHabits'
import iconFalse from 'assets/images/home/icon-dakaweichenggong@3x.png'
import iconTrue from 'assets/images/home/icon-daqiachenggong@3x.png'
import iconWater from 'assets/images/home/icon-shuidi@3x.png'
import iconVe from 'assets/images/home/icon-weishengsu@3x.png'
export default class Task extends Component {
  
  render() {
    let { taskList } = this.props
    return (
      taskList.length > 0 ? (
        <TaskContainer>
          {
            taskList.map((value, index)=>{
              return(
                <div key={value.tId}>
                  <img className="icon-task" src={value.tStatus === 1 ? iconWater:iconVe} alt=""/>
                  <span>{value.tName}</span>
                  <img className="icon-status" src={value.tStatus === 1 ? iconTrue : iconFalse} alt=""/>
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
