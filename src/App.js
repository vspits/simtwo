import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider>
        <HashRouter>
          {routes}
        </HashRouter>
      </Provider> 
      </div>
    );
  }
}

export default App;
