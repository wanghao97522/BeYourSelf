import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import '../styles/task.css'

import { ActionSheet } from 'antd-mobile';

import {TaskNumContainer} from '../StyledHabits'

// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let wrapProps;
// if (isIPhone) {
//   wrapProps = {
//     onTouchStart: e => e.preventDefault(),
//   };
// }

class TaskNum extends Component {
  state = {
    clicked: 'none',
  }
  render() {
    let { num, taskList } = this.props
    let path = {
      pathname: "/addTask",
      state: taskList
    }
    return (
      <TaskNumContainer>
        <p>
          <span>{num} 个任务</span>
          <NavLink to={path}>
            <i className="add"></i>
          </NavLink>
            <i className="more" onClick={this.showActionSheet}></i>
        </p>
        <p className="time">今天 · {new Date().getMonth()} 月 {new Date().getDate()} 日</p>
      </TaskNumContainer>
    )
  }

  showActionSheet = () => {
    const BUTTONS = ['编辑任务列表', '编辑提示音和习惯', '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      maskClosable: true,
      'data-seed': 'logId',
    },
    (buttonIndex) => {
      let { history } = this.props
      this.setState({ clicked: BUTTONS[buttonIndex] },()=>{
        switch(buttonIndex){
          case 0:
            history.push('/reEditTask')
          break
          case 1:
            // 跳到编辑提示音和习惯页面，同桌写的
            history.push()
          break
          default:
        }
      });
    });
  }
}
export default withRouter(TaskNum)