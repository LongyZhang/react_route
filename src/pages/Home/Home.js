import React, { Component } from 'react'
import News from './News/News'
import MyNavLink from '../../component/MyNavLink/MyNavLink'
import Message from './Message/Message'
import { NavLink, Route, Routes, Navigate } from 'react-router-dom'



export default class Item extends Component {
    render() {
        // console.log('router received props', this.props);
        return (
            <div>
                <h3>I am home component</h3>
                <ul className='nav nav-tabs'>
                    <MyNavLink to="News">Newsdasdassad</MyNavLink>

                    <MyNavLink to="Message">Message</MyNavLink>
                    {/* <li className='list-group-item' ><a href="" ></a></li>
                    <li className='list-group-item'><a href=""></a></li> */}
                </ul>
                <Routes>
                    <Route path='News' element={<News />}></Route>
                    <Route path='Message' element={<Message />}></Route>
                </Routes>
                {/* <News /> */}
                {/* <Message /> */}
            </div>


        )
    }
}
