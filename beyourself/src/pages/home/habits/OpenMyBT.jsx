import React, { Component } from 'react'

import {OpenMyTBContainer} from './StyledHabits'

import http from 'utils/httpAxios'

import iconHorn from 'assets/images/home/icon-laba@3x.png'
import iconBack from 'assets/images/home/icon-fanhui@3x.png'
import iconUp from 'assets/images/home/icon-shanghua@3x.png'
import iconPlay from 'assets/images/home/icon-start@3x.png'
import iconStop from 'assets/images/home/stop.png'
import iconPass from 'assets/images/home/icon-tiaoguo@3x.png'
import iconSleep from 'assets/images/home/icon-dadun@3x.png'

import Music from 'assets/music/aaa.mp3'

let timer = null
export default class OpenMyBT extends Component {
  state = {
    opacity: 1,
    time: 0,
    paused: true,
    taskList: [
      {
        tId: 0,
        tName: '喝水',
        tTimespan: 220
      },
      {
        tId: 1,
        tName: '锻炼',
        tTimespan: 11
      }
    ],
    orderNum: 0 
  }
  render() {
    
    return (
      <OpenMyTBContainer>
        <div className="head">
          <img
            className="back"
            onClick={()=>this.handleBack()}
            src={iconBack}
            alt=""
          />
          <img
            className="horn"
            onClick={()=>this.handleHorn()}
            src={iconHorn}
            style={{opacity:this.state.opacity}}
            alt=""
          />
        </div>
        <div className="title">
          {
            this.state.taskList[this.state.orderNum] ? this.state.taskList[this.state.orderNum].tName : ''
          }
        </div>
        <div className="bottom">
          <div className="up">
            <img src={iconUp} alt=""/>
          </div>
          <div className="text">
            每次经过饮水机时，都喝一小杯
          </div>
          <div className="date">
            <span>
              今天
            </span>
          </div>
          <div className="countdown">
            <p>
              <span>
                {
                  this.state.taskList[this.state.orderNum] ? (this.state.time > 60 ? parseInt(this.state.time/60) : 0 ) : ''
                } m {
                      this.state.taskList[this.state.orderNum] ? (this.state.time > 60 ? this.state.time % 60 : this.state.time) : ''
                    } s
              </span>
              {
                this.state.paused ? (
                  <img
                    src={iconStop}
                    onClick={()=>this.handleAudioStop()}
                    alt=""
                  />
                ):(
                  <img
                    src={iconPlay}
                    onClick={()=>this.handleAudioStop()}
                    alt=""
                  />
                )
              }
              <audio
                src={Music}
                ref="audio"
                autoPlay="autoplay"
              ></audio>
            </p>
          </div>
          <div className="success-container">
            <div
              className="pass-container common"
              onClick={()=>this.handlePass()}
            >
              <img src={iconPass} alt=""/>
              <span>跳过</span>
            </div>
            <div
              className="success"
              onClick={()=>this.handleSuccess(this.state.taskList[this.state.orderNum].tId)}
            ></div>
            <div
              className="sleep-container common"
              onClick={()=>this.handlePass()}
            >
              <img src={iconSleep} alt=""/>
              <span>打盹</span>
            </div>
          </div>
        </div>
      </OpenMyTBContainer>
    )
  }

  handleBack(){
    this.props.history.goBack()
  }

  handleHorn(){
    if(this.state.opacity === 1){
      this.setState({
        opacity: .5
      })
    }else{
      this.setState({
        opacity: 1
      })
    }

    if(this.refs.audio.muted){
      this.refs.audio.muted = false
    }else{
      this.refs.audio.muted = true
    }
  }

  handleAudioStop(){
    if(this.refs.audio.paused){
      this.refs.audio.play()
      this.setState({
        paused: true
      })
    }else{
      this.refs.audio.pause()
      this.setState({
        paused: false
      })
    }

    if(!this.state.paused){
      timer = setInterval(()=>{
        this.setState({
          time: this.state.time - 1
        })
      },1000)
    }else{
      clearInterval(timer)
    }
  }

  handlePass(){
    this.setState({
      orderNum: this.state.orderNum + 1
    },()=>{
      this.setState({
        time: this.state.taskList[this.state.orderNum] ? this.state.taskList[this.state.orderNum].tTimespan : ''
      })
      if(this.state.orderNum === this.state.taskList.length){
        this.props.history.goBack()
      }
    })
  }

  handleSuccess(tid){
    http.http({
      method: 'post',
      url: 'http://10.9.20.181:8084/api/habit/update/taskState',
      data: {
        tId: tid
      }
    })

    this.props.history.goBack()
  }

  async componentDidMount(){
    let { location } = this.props
    this.setState({
      time: this.state.taskList[this.state.orderNum].tTimespan
    })
    timer = setInterval(()=>{
      this.setState({
        time: this.state.time - 1
      },()=>{
        if(this.state.time === 0){
          clearInterval(timer)
        }
      })
    },1000)

    // let list = await http.http({
    //   method: 'post',
    //   url: 'http://10.9.20.181:8084/api/habit/task',
    //   data: {
    //     uId: localStorage.getItem('uId'),
    //     hId: location.search.split('=')[2]
    //   }
    // }).list
    // this.setState({
    //   taskList: list
    // })
  }

  componentWillUnmount(){
    clearInterval(timer)
  }
}
