import React, { Component } from 'react'

import { BodyContainer, MainContainer, BorderSearchContainer, SearchContainer } from './StyledTask'

export default class AddTask extends Component {
  render() {
    return (
      <BodyContainer>
        <MainContainer>
          <div className="head">
            <span className="title">添加任务</span>
            <span className="done" onClick={()=>this.clickDone()}>完成</span>
          </div>
          <BorderSearchContainer>
            <SearchContainer>
              
            </SearchContainer>
          </BorderSearchContainer>
        </MainContainer>
      </BodyContainer>
    )
  }

  clickDone(){
    this.props.history.goBack()
  }
}
