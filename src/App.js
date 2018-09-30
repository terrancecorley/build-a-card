import React, { Component } from 'react';
import MainHeader from './MainHeader';
import CardSection from './CardSection';
import MainFooter from './MainFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <CardSection />
        <MainFooter />
      </div>
    );
  }
}

export default App;
