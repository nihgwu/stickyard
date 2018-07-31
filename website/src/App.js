import React, { Component } from 'react'
import Demo from './Demo'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Stickyard</h1>
        </header>
        <Demo />
      </div>
    )
  }
}

export default App
