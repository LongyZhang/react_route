import React, { Component } from 'react'

export default class List extends Component {
    render() {
        console.log('about component received ', this.props);
        return (
            <h3>I am about component</h3>
        )
    }
}
