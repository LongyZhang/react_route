import React, { Component } from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import { NavLink, Route, Routes } from 'react-router-dom'
import Header from './component/Header/Header'
import MyNavLink from './component/MyNavLink/MyNavLink'
import Test from './component/Test/test'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header a={{ name: 'longy', id: 1, location: 'adelaide' }} />
        {/*  Header is normal component
          Home and About is router component       
        */}
        <div className="row">
          <div className="col-3">
            <div className="list-group">
              {/* There is two types of router which are browerRouter and hashRouter */}


              {/* <NavLink style={({ isActive }) => ({ background: isActive ? "green" : "pink" })} className='list-group-item' to="/home">Home</NavLink> */}
              <MyNavLink to={"/about"} > about here </MyNavLink>
              <MyNavLink to={"/home"} >Home here </MyNavLink>

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
                  {/* the path relationship is one to one for component */}
                  <Route path="/about" element={<About />} />
                  {/* <Route path="/home" element={<Test />} /> */}
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
