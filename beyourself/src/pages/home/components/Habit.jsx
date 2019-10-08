import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import {HabitContainer} from '../StyledHome'

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
          img: 'http://a4.qpic.cn/psb?/V14bP3rD4bc7Q4/I3*JlbYprXnqZ5t6L0SQ8sATmHjag4w964Sy1JwJAU0!/m/dL8AAAAAAAAAnull&bo=QgBCAAAAAAADByI!&rf=photolist&t=5',
          habits: '早晨习惯',
          path: '/morning'
        })
      break
      case 'noon': 
        this.setState({
          time: '14:00 下午',
          habits: '下午习惯',
          img: 'http://a3.qpic.cn/psb?/V14bP3rD4bc7Q4/*eptFW3*6R30hTqSHTA.J6dK97jMZhiHHyPPtAE6eEg!/m/dLYAAAAAAAAAnull&bo=OQA*AAAAAAADByQ!&rf=photolist&t=5',
          path: '/noon'
        })
      break
      case 'afternoon': 
        this.setState({
          time: '18:00 黄昏',
          habits: '黄昏习惯',
          img: 'http://a2.qpic.cn/psb?/V14bP3rD4bc7Q4/5Mdu.BweaXhryzsWLOf*YojPEyvuWIRill5A3Wju4tY!/m/dDUBAAAAAAAAnull&bo=SwBCAAAAAAADBys!&rf=photolist&t=5',
          path: '/afternoon'
        })
      break
      default:
        this.setState({})
    }
  }
}

export default withRouter(Habit)

