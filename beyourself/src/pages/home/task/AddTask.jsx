import React, { Component } from 'react'

import { BodyContainer, MainContainer, BorderSearchContainer, TaskListContainer } from './StyledTask'
import http from 'utils/httpAxios'

import iconSearch from 'assets/images/home/icon-sousuo@3x.png'
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

export default class AddTask extends Component {
  state = {
    addTaskList: [
      {
        img: iconWater,
        tId: 0,
        tName: '啊哈哈',
        detail: '如果渴了，说明你已脱水'
      },
      {
        tId: 1,
        tName: '喝水'
      }
    ],
    taskList: [
      {
        tId: 0,
        tName: '喝水',
      },
      {
        tId: 1,
        tName: '锻炼'
      }
    ],
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
              this.state.taskList.map((value, index)=>{
                if(value.tName){
                  return (
                    <div className="container" key={value.tId}>
                      <img src={value.img} alt=""/>
                      <div className="text">
                        <p className="title">{value.tName}</p>
                        <p className="detail">{value.detail}</p>
                      </div>
                      <span 
                        className="remove"
                        //这个tName要变成tId
                        key={value.tName}
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
              this.state.filterList.map((value)=>{
                return(
                  <div className="container" key={value.tName}>
                    <img src={value.img} alt=""/>
                    <div className="text">
                      <p className="title">{value.tName}</p>
                      <p className="detail">{value.detail}</p>
                    </div>
                    <span
                      className="add"
                      key={value.tName}
                      onClick={()=>this.handleAdd({
                        // hId: value.habits.hId, 
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
    // http.http({
    //   method: 'POST',
    //   url: 'http://10.9.20.181:8084/api/habit/add/task',
    //   data: {
    //     uId: localStorage.get('uid'),
    //     hId: data.hId,
    //     tName: data.tName,
    //     tDate: data.tDate,
    //     tTimespan: data.tTimespan,
    //     detail: data.detail
    //   }
    // })

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
    // http.http({
    //   method: 'POST',
    //   url: 'http://10.9.20.181:8084/api/habit/del/task',
    //   data: {
    //     tId: tid
    //   }
    // })

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


  componentDidMount(){
    // let { location } = this.props
    // let list = http.http({
    //   method: 'POST',
    //   url: 'http://10.9.20.181:8084/api/habit/task',
    //   data: {
    //       uId: localStorage.getItem('uid'),
    //       hId: location.state.hid
    //   }
    // })

    // this.setState({
    //   addTaskList: list.list2,
    //   taskList: list.list
    // })

    this.filter()
    
  }
  
  filter(){
    let name = []
    this.state.taskList.forEach((value)=>{
      name.push(value.tName)
    })
    let filterList = this.state.addTaskList.filter((value)=>{
      return name.includes(value.tName) === false
    })
    
    this.setState({
      filterList: filterList
    })
  }
}
