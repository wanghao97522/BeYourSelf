import React, { Component } from 'react'
import {NavLink, withRouter} from 'react-router-dom'

import {OpenBTContainer} from '../StyledHabits'

class OpenBT extends Component {
  render() {
    let { className, location } = this.props
    return (
      <OpenBTContainer>
        <NavLink to={`/openMyBT${location.search}`}>
          <div className={className}>
            <span>开始我的美妙时刻</span>
          </div>
        </NavLink>
      </OpenBTContainer>
    )
  }
}
export default withRouter(OpenBT)