import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        console.log('header received props', this.props);
        return (
            <div className="row">
                <div className="col">
                    <div className="page-header">
                        <h2>React Router Demo</h2>
                    </div>
                </div>
            </div>
        )
    }
}
