import React, { Component } from 'react'
import {BodyContainer, SearchContainer, BorderTaskItemContainer} from './StyledTask'
import http from 'utils/httpAxios'
import iconSearch from 'assets/images/home/icon-sousuo1@3x.png'
import iconFourCircle from 'assets/images/home/icon-four@3x.png'
import Head from '../habits/components/Head'

export default class AddTaskItem extends Component {
  state = {
    iptValue: this.props.location.state.iptValue
  }
  render() {
    let { location } = this.props
    let className = location.search.split('=')[1].split('&')[0]
    return (
      <BodyContainer>
        <Head className={className}></Head>
        <SearchContainer>
          <img src={iconSearch} alt=""/>
          <input 
            value={this.state.iptValue}
            onChange={(e)=>this.changeValue(e)}
            type="text"
          />
          <i onClick={()=>this.handleClick()}></i>
        </SearchContainer>
        <BorderTaskItemContainer>
          <img src={iconFourCircle} alt=""/>
          <p>{this.state.iptValue}</p>
          <span onClick={()=>this.handleAdd()}>添加</span>
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

  handleAdd(){
    http.http({
      method: 'POST',
      url: '/api/habit/add/task2',
      data: {
        tName: this.state.iptValue
      }
    })

    this.props.history.goBack()
  }
}
