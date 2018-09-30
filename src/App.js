import React, { Component } from 'react';
import MainHeader from './MainHeader';
import CardSection from './CardSection';
import MainFooter from './MainFooter';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <CardSection />
        <Button />
        <MainFooter />
      </div>
    );
  }
}

export default App;
