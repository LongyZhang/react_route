import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {

    render() {
        console.log('mynavlink props', this.props);
        const { linkname, children } = this.props
        return (
            <NavLink style={({ isActive }) => ({ background: isActive ? "green" : "pink" })} className='list-group-item ' {...this.props}>{children}</NavLink>
        )
    }
}
