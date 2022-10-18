import React, { Component } from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import { Link, Router } from 'react-router-dom'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="list-group">
              {/* There is two types of router which are browerRouter and hashRouter */}
              <Router>
                <Link className='list-group-item ' to="/about"></Link>
                <Link className='list-group-item' to="/Home"></Link>
              </Router>
              {/* <a href="./about.html" className='list-group-item'>about</a>
              <a href="./home.html" className='list-group-item active'>home</a> */}
            </div>
          </div>
          <div className="col-8">
            <div className="panel">
              <div className="panel-body">
                <h3>???</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
