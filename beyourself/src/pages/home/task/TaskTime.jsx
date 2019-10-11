import React, { Component } from 'react'

import { DatePicker, List } from 'antd-mobile';
// import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

import {BodyContainer, TaskTimeContainer, BoderEmptyContainer} from './StyledTask'

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

export default class TaskTime extends Component {
  state = {
    date: now,
    time: now,
    utcDate: utcNow,
    dpValue: null,
    customChildValue: null,
    visible: false,
  }
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

        <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
          <DatePicker
            mode="time"
            minDate={minDate}
            maxDate={maxDate}
            value={this.state.time}
            onChange={time => this.setState({ time })}
          >
            <List.Item arrow="horizontal">Limited time</List.Item>
          </DatePicker>
        </List>

      </BodyContainer>
    )
  }
}
