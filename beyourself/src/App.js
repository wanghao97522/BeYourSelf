import React, { Component } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import './assets/styles/reset.css'
import './assets/styles/animate.css'

import MyRouter from './pages/Router'


export default class App extends Component {
  render() {
    return (
      <Router>
        <MyRouter></MyRouter>
      </Router>
    )
  }
}
