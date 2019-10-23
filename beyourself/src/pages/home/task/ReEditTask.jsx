import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import { BodyContainer, MainContainer, BorderTaskItemContainer} from './StyledTask'

import http from 'utils/httpAxios'

import MaskHoc from '../HOC/MaskHoc'

import iconMove from 'assets/images/home/icon-list@3x.png'
import iconWater from 'assets/images/home/icon-shuidi@3x.png'

class ReEditTask extends Component {
  state = {
    taskList: [
      {
        tId: 0,
        tName: '喝水'
      },
      {
        tId: 2,
        tName: '锻炼'
      }
    ]
  }
  render() {
    let { showActionSheet, location } =this.props
    return (
      <BodyContainer>
        <MainContainer>
          <div className="head">
            <span className="title">重新编辑任务</span>
            <span className="done" onClick={()=>this.clickDone()}>完成</span>
          </div>
          {
            this.state.taskList.map((value)=>{
              return(
                <BorderTaskItemContainer key={value.tId}>
                  <img className="icon-move" src={iconMove} alt=""/>
                  <p>
                    <img className="icon" src={iconWater} alt=""/>
                    <strong>{value.tName}</strong>
                  </p>
                  <i onClick={()=>showActionSheet({
                    options:['调整任务长短','删除任务','取消'],
                    path:[`/tasktime${location.search}`],
                    fn: this.deleteTask,
                    tid: value.tId
                  })}></i>
                </BorderTaskItemContainer>
              )
            })
          }
        </MainContainer>
      </BodyContainer>
    )
  }

  clickDone(){
    this.props.history.goBack()
  }

  deleteTask = (tid)=> {
    // http.http({
    //   method: 'POST',
    //   url: 'http://10.9.20.181:8084/api/habit/del/task',
    //   data: {
    //     tId: tid
    //   }
    // })

    // let taskList = this.state.taskList.filter((value)=>{
    //   return value.tId !== tid
    // })

    // this.setState({
    //   taskList: taskList
    // })
    
  }

  async componentDidMount(){
    // let list = await http.http({
    //   method: 'post',
    //   url: 'http://10.9.20.181:8084/api/habit/task',
    //   data: {
    //     uId: localStorage.getItem('uId'),
    //     hId: this.props.location.search.split('=')[1]
    //   }
    // }).list

    // this.setState({
    //   taskList: list
    // })
  }
}

export default MaskHoc(withRouter(ReEditTask))
