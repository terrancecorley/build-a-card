import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MainHeader from './MainHeader';
import CardSection from './CardSection';
import MainFooter from './MainFooter';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MainHeader />
          <CardSection />
          <MainFooter />
        </div>
      </Provider>
    );
  }
}

export default App;
