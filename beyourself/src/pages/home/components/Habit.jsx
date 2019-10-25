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
      search: `?time=${this.state.className}&hid=${habit.hId}`,
      state: habit.hId
    }
    return (
      <HabitContainer>
        <div className={this.state.className}>
          <div className="time">
            <img src={this.state.img} alt=""/>
            <span>{habit.hTime} {habit.hTime&&(~~habit.hTime.split(':')[0]) > 12 ? '下午' : '上午'}</span>
          </div>
          <NavLink to={path}>
            <div className="habits" >
              <h1>{habit.hName}</h1>
            </div>
          </NavLink>
        </div>
      </HabitContainer>
    )
  }

  componentDidMount(){
    
    let { hId } = this.props.habit
    switch(hId){
      case 1:
        this.setState({
          className: 'morning'
        },()=>{
          this.setState({
            img: `${iconMorning}`
          })
        })
      break
      case 2:
        this.setState({
          className: 'noon'
        },()=>{
          this.setState({
            img: `${iconNoon}`
          })
        })
      break
      case 3:
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
  }
}

export default withRouter(Habit)

