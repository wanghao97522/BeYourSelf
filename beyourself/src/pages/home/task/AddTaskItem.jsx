import React, { Component } from 'react'

import {BodyContainer, BorderSearchContainer, BorderTaskItemContainer} from './StyledTask'

import iconSearch from 'assets/images/home/icon-sousuo1@3x.png'
import iconFourCircle from 'assets/images/home/icon-four@3x.png'

import Head from '../habits/components/Head'

export default class AddTaskItem extends Component {
  state = {
    iptValue: this.props.location.state.iptValue
  }
  render() {
    let { location } = this.props
    let className = location.pathname.split('/')[1]
    return (
      <BodyContainer>
        <Head className={className}></Head>
        <BorderSearchContainer>
          <img src={iconSearch} alt=""/>
          <input 
            value={this.state.iptValue}
            onChange={(e)=>this.changeValue(e)}
            type="text"
          />
          <i onClick={()=>this.handleClick()}></i>
        </BorderSearchContainer>
        <BorderTaskItemContainer>
          <img src={iconFourCircle} alt=""/>
          <p>{this.state.iptValue}</p>
          {/* 添加之后可能发给后端？出现在添加任务列表 */}
          <span>添加</span>
        </BorderTaskItemContainer>
      </BodyContainer>
    )
  }

  changeValue(e){
    this.setState({
      iptValue: e.target.value
    },()=>{
      if(!this.state.iptValue){
        this.props.history.goBack()
      }
    })
  }

  handleClick(){
    this.props.history.goBack()
  }
  
}
