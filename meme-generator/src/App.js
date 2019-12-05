import React from 'react';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';

import './App.css';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      meow: ""
    }
  }

  render() {

    return (
      <div>
        <Header />
        <MemeGenerator />
        
      </div>
      
    )

  }
}

export default App;
