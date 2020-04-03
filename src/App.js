import React, { Component } from 'react';
import Contact from './components/Contatc'


class App extends Component {
  render () {
    return (
      <div className="App">
        <Contact name="Jimmie Stephans" avatar="https://randomuser.me/api/portraits/men/74.jpg" online />
        <Contact name="Thomas Cooper" avatar="https://randomuser.me/api/portraits/men/67.jpg" />
        <Contact name="Delores Sims" avatar="https://randomuser.me/api/portraits/women/24.jpg" online />
      </div>
    );
  }
}

export default App;
