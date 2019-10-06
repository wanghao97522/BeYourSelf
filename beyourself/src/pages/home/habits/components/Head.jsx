import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { HeadContainer } from '../StyledHabits'

class Head extends Component {
  state = {
    title: '',
    time: ''
  }
  render() {
    return (
      <HeadContainer>
        <div className={this.state.title}>
          <div className="title-container">
            <div className="back" onClick={()=>this.back()}></div>
            <div className="title">
              {this.state.title}
            </div>
          </div>
          <div className="time-container">
            <div className="notice">
              <span>提示音</span>
            </div>
            <div className="time">{this.state.time}</div>
          </div>
        </div>
      </HeadContainer>
    )
  }

  back(){
    this.props.history.goBack()
  }

  componentDidMount(){
    let { className } = this.props
    switch(className){
      case 'morning':
        this.setState({
          title: '早晨习惯',
          time: '7:00 上午'
        })
      break
      case 'noon':
        this.setState({
          title: '下午习惯',
          time: '2:00 下午'
        })
      break
      case 'afternoon':
        this.setState({
          title: '黄昏习惯',
          time: '6:00 黄昏'
        })
      break
      default:
        this.setState({})
    }
  }
}


export default withRouter(Head)