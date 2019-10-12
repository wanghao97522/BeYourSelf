import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import MaskHoc from '../../HOC/MaskHoc'

import {TaskNumContainer} from '../StyledHabits'

class TaskNum extends Component {
  state = {
    clicked: 'none',
  }
  render() {
    let { num, taskList, match, showActionSheet } = this.props
    let path = {
      pathname: `${match.path}/addTask`,
      state: taskList
    }
    return (
      <TaskNumContainer>
        <p>
          <span>{num} 个任务</span>
          <NavLink to={path}>
            <i className="add"></i>
          </NavLink>
            <i className="more" onClick={()=>showActionSheet({
              options:['编辑任务列表','编辑提示音和习惯','取消'],
              path:['/reEditTask','/soundhabit']
            })}></i>
        </p>
        <p className="time">今天 · {new Date().getMonth()+1} 月 {new Date().getDate()} 日</p>
      </TaskNumContainer>
    )
  }
}
export default withRouter(MaskHoc(withRouter(TaskNum)))