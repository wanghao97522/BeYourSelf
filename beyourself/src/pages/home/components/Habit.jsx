import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import {HabitContainer} from '../StyledHome'

import iconMorning from 'assets/images/home/icon-zaoshang@3x.png'
import iconNoon from 'assets/images/home/icon-shandian@3x.png'
import iconAfernoon from 'assets/images/home/icon-huanghun@3x.png'

class Habit extends Component {
  state = {
    className: '',
    img: ''
  }
  render() {
    let { habit } = this.props
    let path = {
      pathname: '/habit', 
      search: `?${this.state.className}`
      // state: {
      //   className: this.state.className,
      //   hid: habit.hid
      // }
      // query:{
      //   className: this.state.className
      // }
    }
    return (
      <HabitContainer>
        <div className={this.state.className}>
          <div className="time">
            <img src={this.state.img} alt=""/>
            <span>{habit.time}</span>
          </div>
          <NavLink to={path}>
            <div className="habits">
              <h1>{habit.habitName}</h1>
            </div>
          </NavLink>
        </div>
      </HabitContainer>
    )
  }

  componentDidMount(){
    let { hid } = this.props.habit
    switch(hid){
      case 0:
        this.setState({
          className: 'morning'
        },()=>{
          this.setState({
            img: `${iconMorning}`
          })
        })
      break
      case 1:
        this.setState({
          className: 'noon'
        },()=>{
          this.setState({
            img: `${iconNoon}`
          })
        })
      break
      case 2:
        this.setState({
          className: 'afternoon'
        },()=>{
          this.setState({
            img: `${iconAfernoon}`
          })
        })
      break
      default:
        this.setState({
          className: 'others'
        })
    }
    // switch(this.state.className){
    //   case 'morning': 
    //   console.log('hhh')
    //     this.setState({
    //       img: `${iconMorning}`,
    //       // title: '早晨习惯',
    //       // path: '/morning'
    //     })
    //   break
    //   case 'noon': 
    //     this.setState({
    //       // title: '下午习惯',
    //       img: `${iconNoon}`,
    //       // path: '/noon'
    //     })
    //   break
    //   case 'afternoon': 
    //     this.setState({
    //       // title: '黄昏习惯',
    //       img: `${iconAfernoon}`,
    //       // path: '/afternoon'
    //     })
    //   break
    //   default:
    //     this.setState({})
    // }
  }
}

export default withRouter(Habit)

