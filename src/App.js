import React, { Component } from 'react'
import HomePage from './HomePage/HomePage'
import Cart from './Cart'
export class App extends Component {
 

  render() {
    return (
      <div>
        <HomePage/>
        <Cart />
        </div>
    )
  }
}

export default App

