import React, { Component } from 'react'

import {OpenBTContainer} from '../StyledHabits'

export default class OpenBT extends Component {
  render() {
    let { className } = this.props
    return (
      <OpenBTContainer>
        <div className={className}>
          <span>开始我的美妙时刻</span>
        </div>
      </OpenBTContainer>
    )
  }
}
