import React, { Component } from 'react'
import Item from './components/Item/Item'
import List from './components/List/List'
import Search from './components/Search/Search'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <List />
      </div>
    )
  }
}
 