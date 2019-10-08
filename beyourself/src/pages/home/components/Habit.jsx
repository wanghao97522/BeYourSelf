import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import {HabitContainer} from '../StyledHome'

import iconMorning from 'assets/images/home/icon-zaoshang@3x.png'
import iconNoon from 'assets/images/home/icon-shandian@3x.png'
import iconAfernoon from 'assets/images/home/icon-huanghun@3x.png'

class Habit extends Component {
  state = {
    time: '',
    img: '',
    habits: '',
    path: ''
  }
  render() {
    let { className } = this.props
    return (
      <HabitContainer>
        <div className={className}>
          <div className="time">
            <img src={this.state.img} alt=""/>
            <span>{this.state.time}</span>
          </div>
          <NavLink to={this.state.path}>
            <div className="habits">
              <h1>{this.state.habits}</h1>
            </div>
          </NavLink>
        </div>
      </HabitContainer>
    )
  }

  componentDidMount(){
    let { className } = this.props
    switch(className){
      case 'morning': 
        this.setState({
          time: '7:00 上午',
          img: `${iconMorning}`,
          habits: '早晨习惯',
          path: '/morning'
        })
      break
      case 'noon': 
        this.setState({
          time: '14:00 下午',
          habits: '下午习惯',
          img: `${iconNoon}`,
          path: '/noon'
        })
      break
      case 'afternoon': 
        this.setState({
          time: '18:00 黄昏',
          habits: '黄昏习惯',
          img: `${iconAfernoon}`,
          path: '/afternoon'
        })
      break
      default:
        this.setState({})
    }
  }
}

export default withRouter(Habit)

