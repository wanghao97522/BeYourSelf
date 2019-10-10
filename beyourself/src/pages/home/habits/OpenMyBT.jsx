import React, { Component } from 'react'

import {OpenMyTBContainer} from './StyledHabits'

import iconHorn from 'assets/images/home/icon-laba@3x.png'
import iconBack from 'assets/images/home/icon-fanhui@3x.png'
import iconUp from 'assets/images/home/icon-shanghua@3x.png'

export default class OpenMyBT extends Component {
  render() {
    return (
      <OpenMyTBContainer>
        <div className="head">
          <img className="back" src={iconBack} alt=""/>
          <img className="horn" src={iconHorn} alt=""/>
        </div>
        <div className="title">项目</div>
        <div className="up">
          <img src={iconUp} alt=""/>
        </div>
      </OpenMyTBContainer>
    )
  }
}
