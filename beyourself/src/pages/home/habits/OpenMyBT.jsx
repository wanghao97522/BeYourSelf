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

import aaa from 'assets/music/aaa.mp3'
import Bruno from 'assets/music/Bruno.mp3'
import Freedom from 'assets/music/Freedom.mp3'
import Lawrence from 'assets/music/Lawrence.mp3'
import night from 'assets/music/night.mp3'

let timer = null
export default class OpenMyBT extends Component {
  state = {
    opacity: 1,
    time: 57,
    paused: true,
    taskList: [
      {
        tTimespan: 57
      }
    ],
    orderNum: 0 ,
    music: '',
    musicList: [
      aaa,
      Bruno,
      Freedom,
      Lawrence,
      night
    ],
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
            this.state.taskList[this.state.orderNum] ? this.state.taskList[this.state.orderNum].tName : '项目'
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
                  this.state.taskList[this.state.orderNum] ? (this.state.time > 60 ? parseInt(this.state.time/60) : 0 ) : 0
                } m {
                      this.state.taskList[this.state.orderNum] ? (this.state.time > 60 ? this.state.time % 60 : this.state.time) : this.state.time
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
              //音乐在这里，请求习惯对比习惯id获取其中hMusic，音乐要全部引入先
                src={this.state.music}
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
              onClick={()=>this.handleSuccess(this.state.taskList&&this.state.taskList[this.state.orderNum].tId)}
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
      url: '/api/habit/update/taskState',
      data: {
        tId: tid
      }
    })
    this.props.history.goBack()
  }

  async componentDidMount(){
    let { location } = this.props
    let list = await http.http({
      method: 'post',
      url: '/api/habit/task',
      data: {
        // uId: localStorage.getItem('uId'),
        uId: 1,
        hId: location.search.split('=')[2]
      }
    })
    
    this.setState({
      taskList: list.list
    },()=>{
      
      this.setState({
        time: this.state.taskList.length > 0 ? this.state.taskList[this.state.orderNum].tTimespan : 57
      })
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

    //音乐
    let habitsList = await http.http({
      method: 'get',
      // url: `/api/habit/index?uId=${localStorage.getItem('uId')}`
      url: '/api/habit/index?uId=1'
    })
    
    let task = habitsList.list.filter((value)=>{
      return value.hId === ~~location.search.split('=')[2]
    })
    
    this.setState({
      music: task[0].hMusic
    })
  }

  componentWillUnmount(){
    clearInterval(timer)
  }
}
