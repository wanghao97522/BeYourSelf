import React, { Component } from 'react'

import {OpenMyTBContainer} from './StyledHabits'

import iconHorn from 'assets/images/home/icon-laba@3x.png'
import iconBack from 'assets/images/home/icon-fanhui@3x.png'
import iconUp from 'assets/images/home/icon-shanghua@3x.png'
import iconPlay from 'assets/images/home/icon-start@3x.png'
import iconPass from 'assets/images/home/icon-tiaoguo@3x.png'
import iconSleep from 'assets/images/home/icon-dadun@3x.png'

import Music from 'assets/music/aaa.mp3'

export default class OpenMyBT extends Component {
  state = {
    opacity: 1
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
        <div className="title">项目</div>
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
              <span>0m 57s</span>
              <img src={iconPlay} alt=""/>
              <audio src={Music} autoPlay="autoplay"></audio>
            </p>
          </div>
          <div className="success-container">
            <div className="pass-container common">
              <img src={iconPass} alt=""/>
              <span>跳过</span>
            </div>
            <div className="success"></div>
            <div className="sleep-container common">
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
  }
}
