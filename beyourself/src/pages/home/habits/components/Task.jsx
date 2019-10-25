import React, { Component } from 'react'

import {TaskContainer, EmptyTaskContainer} from '../StyledHabits'

import iconFalse from 'assets/images/home/icon-dakaweichenggong@3x.png'
import iconTrue from 'assets/images/home/icon-daqiachenggong@3x.png'

import iconWater from 'assets/images/home/icon-shuidi@3x.png'
import iconDress from 'assets/images/home/icon-chuifengji@3x.png'
import iconFood from 'assets/images/home/icon-dami@3x.png'
import iconExercise from 'assets/images/home/icon-duanlian@3x.png'
import iconFish from 'assets/images/home/icon-fish@3x.png'
import iconMedicine from 'assets/images/home/icon-fuyao@3x.png'
import iconThink from 'assets/images/home/icon-mingxiang@3x.png'
import iconShower from 'assets/images/home/icon-muyu@3x.png'
import iconSpread from 'assets/images/home/icon-shenzhan@3x.png'
import iconTea from 'assets/images/home/icon-tea@3x.png'
import iconTeeth from 'assets/images/home/icon-toothbrush@3x.png'
import iconVe from 'assets/images/home/icon-weishengsu@3x.png'
import iconWrite from 'assets/images/home/icon-write@3x.png'
import iconSleep from 'assets/images/home/icon-xiaoshui@3x.png'
import iconBreakfast from 'assets/images/home/icon-zaocan@3x.png'

export default class Task extends Component {
  
  render() {
    let { taskList } = this.props
    return (
      taskList.length > 0 ? (
        <TaskContainer>
          {
            taskList.map((value, index)=>{
              return(
                // 这里的tName要变成tId
                <div key={value.tName}>
                  <img className="icon-task" src={value.img} alt=""/>
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
