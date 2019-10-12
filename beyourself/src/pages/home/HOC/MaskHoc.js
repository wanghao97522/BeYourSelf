import React, { Component } from 'react'

import { ActionSheet } from 'antd-mobile';

import '../habits/styles/task.css'

export default (Comp) => {
  return class extends Component {
    render(){
      let { num, taskList } = this.props
      return <Comp
        showActionSheet={this.showActionSheet}
        num={num}
        taskList={taskList}
      ></Comp>
    }
    showActionSheet = ({
      options,
      path,
      fn
    }) => {
      const BUTTONS = [options[0], options[1], options[2]];
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
              history.push(path[0])
            break
            case 1:
              // 删除任务
              fn ? fn() : history.push(path[1])
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
}