import React, { Component } from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    )
  }
}
