import React, { Component } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
// import ErrorBoundary from './components/ErrorBoundary';
// import ResultsComponent from './components/ResultComponent';

class App extends Component {
  render() {
    return (
      // <ErrorBoundary>
        <div className="App">
          <SearchComponent />
        </div>
      // </ErrorBoundary>
    );
  }
}

export default App;
