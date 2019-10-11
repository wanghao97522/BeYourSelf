import React, { Component } from 'react'

import { ActionSheet } from 'antd-mobile';

import { BodyContainer, MainContainer, BorderTaskItemContainer} from './StyledTask'

import iconMove from 'assets/images/home/icon-list@3x.png'
import iconWater from 'assets/images/home/icon-shuidi@3x.png'

export default class ReEditTask extends Component {
  render() {
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
            <i onClick={this.showActionSheet}></i>
          </BorderTaskItemContainer>
        </MainContainer>
      </BodyContainer>
    )
  }

  clickDone(){
    this.props.history.goBack()
  }

  showActionSheet = () => {
    const BUTTONS = ['调整任务长短', '删除任务', '取消'];
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
            // 同桌路由
            history.push('/taskTime')
          break
          case 1:
            // 删除任务
          break
          default:
        }
      })
    })
  }
  
  componentWillUnmount(){
    ActionSheet.close()
  }
}
