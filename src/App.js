import React, { Component } from 'react'
import Products from "./Products.js"

export class App extends Component {
  render() {
    return (
      <div>
        <Products className="product"/>
      </div>
    )
  }
}

export default App