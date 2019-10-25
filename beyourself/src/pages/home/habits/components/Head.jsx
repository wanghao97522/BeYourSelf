import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { HeadContainer } from '../StyledHabits'
import http from 'utils/httpAxios'

class Head extends Component {
  state = {
    title: '',
    task: ''
  }
  render() {
    let { className } = this.props
    return (
      <HeadContainer>
        <div className={className}>
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
            <div className="time">
              {this.state.task? this.state.task[0].hTime:''} 
              {this.state.task?((~~this.state.task[0].hTime.split(':')[0]) > 12 ? '下午' : '上午'):''}
            </div>
          </div>
        </div>
      </HeadContainer>
    )
  }

  back(){
    this.props.history.goBack()
  }

  async componentDidMount(){
    let hid = ~~this.props.location.search.split('=')[2]
    let list = await http.http({
      method: 'GET',
      url: `/api/habit/index?uId=${localStorage.getItem('uId')}`
    })
    
    let task = list.list.filter((value)=>{
      return value.hId === hid
    })
    this.setState({
      task: task
    })
    
    let { className, location } = this.props
    if(location.pathname === '/addTaskItem'){
        this.setState({
          title: '添加任务',
        })
  }else{
      switch(className){
        case 'morning':
          this.setState({
            title: '早晨习惯',
          })
        break
        case 'noon':
          this.setState({
            title: '下午习惯',
          })
        break
        case 'afternoon':
          this.setState({
            title: '黄昏习惯',
          })
        break
        case 'others':
          this.setState({
            title: task[0].hName,
          })
        break
        default:
          this.setState({})
      }
    }
  }
}


export default withRouter(Head)