import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import { BodyContainer, MainContainer, BorderTaskItemContainer} from './StyledTask'

import MaskHoc from '../HOC/MaskHoc'

import iconMove from 'assets/images/home/icon-list@3x.png'
import iconWater from 'assets/images/home/icon-shuidi@3x.png'

class ReEditTask extends Component {
  render() {
    let { showActionSheet } =this.props
    return (
      <BodyContainer>
        <MainContainer>
          <div className="head">
            <span className="title">重新编辑任务</span>
            <span className="done" onClick={()=>this.clickDone()}>完成</span>
          </div>
          <BorderTaskItemContainer>
            <img className="icon-move" src={iconMove} alt=""/>
            <p>
              <img className="icon" src={iconWater} alt=""/>
              <strong>喝水</strong>
            </p>
            <i onClick={()=>showActionSheet({
              options:['调整任务长短','删除任务','取消'],
              path:['/tasktime']
            })}></i>
          </BorderTaskItemContainer>
        </MainContainer>
      </BodyContainer>
    )
  }

  clickDone(){
    this.props.history.goBack()
  }

  // 这里应该有个删除任务的功能
}

export default MaskHoc(withRouter(ReEditTask))
