import React, { Component } from 'react'

import { BodyContainer, MainContainer, BorderSearchContainer, TaskListContainer } from './StyledTask'

import iconSearch from 'assets/images/home/icon-sousuo@3x.png'
import iconWater from 'assets/images/home/icon-shuidi@3x.png'

export default class AddTask extends Component {
  // 后端数据可能不是这样的，渲染要改
  state = {
    addTaskList: [
      {
        img: iconWater,
        title: '喝水',
        detail: '如果渴了，说明你已脱水'
      }
    ],
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
              this.state.addTaskList.map((value, index)=>{
                // 这里要判断是否添加过，还没写判断
                return (
                  <div className="container" key={value.title}>
                    <img src={value.img} alt=""/>
                    <div className="text">
                      <p className="title">{value.title}</p>
                      <p className="detail">{value.detail}</p>
                    </div>
                    <span className="remove">移除</span>
                    {/* <span className="add">添加</span> */}
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
  // 有用
  componentDidMount(){
    // console.log(this.props.location.state)
    // console.log(this.props)
  }
}
