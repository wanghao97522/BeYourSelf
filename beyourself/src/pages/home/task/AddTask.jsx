import React, { Component } from 'react'

import { BodyContainer, MainContainer, BorderSearchContainer, TaskListContainer } from './StyledTask'
import http from 'utils/httpAxios'

import iconSearch from 'assets/images/home/icon-sousuo@3x.png'
import iconWater from 'assets/images/home/icon-shuidi@3x.png'
import iconVe from 'assets/images/home/icon-weishengsu@3x.png'

export default class AddTask extends Component {
  state = {
    addTaskList: [],
    filterList: [],
    iptValue: ''
  }
  render() {
    return (
      <BodyContainer>
        <MainContainer>
          <div className="head">
            <span className="title">添加任务</span>
            <span className="done" onClick={()=>this.clickDone()}>完成</span>
          </div>
          <BorderSearchContainer>
            <img src={iconSearch} alt=""/>
            <input 
              value={this.state.iptValue}  
              onChange={(e)=>this.changeValue(e)}
              onKeyDown={(e)=>this.handleInput(e)}
              type="text" 
              placeholder="我想要……"
            />
          </BorderSearchContainer>
          <TaskListContainer>
            {
              this.state.taskList&&this.state.taskList.map((value, index)=>{
                if(value.tName){
                  return (
                    <div className="container" key={value.tId}>
                      <img src={iconWater} alt=""/>
                      <div className="text">
                        <p className="title">{value.tName}</p>
                        <p className="detail">{value.detail}</p>
                      </div>
                      <span 
                        className="remove"
                        key={value.tId}
                        onClick={()=>this.handleRemove(value.tId)}
                      >移除</span>
                    </div>
                  )
                }else{
                  return false
                }
              })
            }
            {
              this.state.filterList&&this.state.filterList.map((value)=>{
                return(
                  <div className="container" key={value.tId}>
                    <img src={iconVe} alt=""/>
                    <div className="text">
                      <p className="title">{value.tName}</p>
                      <p className="detail">{value.detail}</p>
                    </div>
                    <span
                      className="add"
                      key={value.tId}
                      onClick={()=>this.handleAdd({
                        hId: this.state.taskList[0].habits.hId, 
                        tName: value.tName, 
                        tDate: value.tDate, 
                        tTimespan: value.tTimespan, 
                        detail: value.detail
                      })}
                    >添加</span>
                  </div>
                )
              })
            }
          </TaskListContainer>
        </MainContainer>
      </BodyContainer>
    )
  }

  clickDone(){
    this.props.history.goBack()
  }

  changeValue(e){
    this.setState({
      iptValue: e.target.value
    })
  }

  handleInput(e){
    let iptValue = this.state.iptValue
    let { location } = this.props
    if(iptValue && e.keyCode === 13){
      this.props.history.push(`/addTaskItem${location.search}`,{
        iptValue
      })
    }

  }

  handleAdd(data){
    http.http({
      method: 'POST',
      url: '/api/habit/add/task',
      data: {
        // uId: localStorage.getItem('uId'),
        uId: 1,
        hId: data.hId,
        tName: data.tName,
        tDate: data.tDate,
        tTimespan: data.tTimespan,
        detail: data.detail
      }
    })

    let taskList = this.state.filterList.filter((value)=>{
      return value.tName === data.tName
    })
    this.setState({
      taskList: [
        ...this.state.taskList,
        ...taskList
      ]
    },()=>{
      this.filter()
    })
    

  }

  handleRemove(tid){
    http.http({
      method: 'POST',
      url: '/api/habit/del/task',
      data: {
        tId: tid
      }
    })

    let taskList = this.state.taskList.map((value)=>{
      if(value.tId !== tid){
        return value
      }else{
        return false
      }
    })
    
    this.setState({
      taskList: taskList
    },()=>{
      this.filter()
    })
  }


  async componentDidMount(){
    let { location } = this.props
    let list = await http.http({
      method: 'POST',
      url: '/api/habit/add/taskall',
      data: {
          // uId: localStorage.getItem('uId'),
          uId: 1,
          hId: location.state.hid
      }
    })

    this.setState({
      addTaskList: list.list2,
      taskList: list.list
    })

    this.filter()
  }
  
  filter(){
    let name = []
    this.state.taskList.forEach((value)=>{
      name.push(value.tName)
    })
    let filterList = this.state.addTaskList&&this.state.addTaskList.filter((value)=>{
      return name.includes(value.tName) === false
    })
    
    this.setState({
      filterList: filterList
    })
  }
}
