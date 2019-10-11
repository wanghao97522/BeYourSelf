import React, { Component } from 'react'

import {BodyContainer, TaskTimeContainer, BoderEmptyContainer} from './StyledTask'

export default class TaskTime extends Component {
  render() {
    return (
      <BodyContainer>
        <TaskTimeContainer>
          <div className="header">
            <div className="title">
              <span>任务时间长短</span>
              <span>项目</span>
            </div>
            <span className="done">完成</span>
          </div>
          <BoderEmptyContainer></BoderEmptyContainer>
        </TaskTimeContainer>
      </BodyContainer>
    )
  }
}
