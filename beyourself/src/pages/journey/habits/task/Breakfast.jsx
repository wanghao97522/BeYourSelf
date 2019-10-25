import React, { Component } from 'react'
import { DatePicker, List } from 'antd-mobile';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
if (minDate.getDate() !== maxDate.getDate()) {
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}


export default class Breakfast extends Component {
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
        );
    }
}



