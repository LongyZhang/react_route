import React, { Component } from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import { Link, Route, Routes } from 'react-router-dom'

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

              <Link className='list-group-item ' to="/about">About</Link>
              <Link className='list-group-item' to="/home">Home</Link>

              {/* <a href="./about.html" className='list-group-item'>about</a>
              <a href="./home.html" className='list-group-item active'>home</a> */}
            </div>
          </div>
          <div className="col-8">
            <div className="panel">
              <div className="panel-body">
                {/* registe for route
                    the new version should use routes to contain many route
                    dont forget to include browserRouter in outside of app.js
                  */}
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/home" element={<Home />} />
                </Routes>

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
