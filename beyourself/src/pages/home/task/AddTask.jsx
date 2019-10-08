import React, { Component } from 'react'

import { BodyContainer, MainContainer, BorderSearchContainer, TaskListContainer } from './StyledTask'

import iconSearch from 'assets/images/home/icon-sousuo@3x.png'

export default class AddTask extends Component {
  // state = {
  //   addTaskList: [
  //     {

  //     }
  //   ]
  // }
  render() {
    return (
      <BodyContainer>
        <MainContainer>
          <div className="head">
            <span className="title">添加任务</span>
            <span className="done" onClick={()=>this.clickDone()}>完成</span>
          </div>
          <BorderSearchContainer>
            <div>
              <img src={iconSearch} alt=""/>
              <input type="text" placeholder="我想要……"/>
            </div>
          </BorderSearchContainer>
          <TaskListContainer>
            
          </TaskListContainer>
        </MainContainer>
      </BodyContainer>
    )
  }

  clickDone(){
    this.props.history.goBack()
  }
  
  componentDidMount(){
    console.log(this.props.location.state)
  }
}
