import React, { Component } from 'react'

import Head from './components/Head'

import { BodyContainer } from './StyledHabits'

export default class Morning extends Component {
  render() {
    return (
      <BodyContainer>
        <Head className="morning"></Head>
      </BodyContainer>
    )
  }
}
