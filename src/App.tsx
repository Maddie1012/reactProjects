import { Component } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <SearchComponent />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
