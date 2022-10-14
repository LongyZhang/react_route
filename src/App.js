import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  getData = () => {
    axios.get('??').then(
      response => { console.log('success', response.data); },
      error => { console.log('failed', error); }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getData}>Click me to get Data</button>

      </div>
    )
  }
}
