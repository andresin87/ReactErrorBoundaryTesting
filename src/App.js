import React from 'react';

import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';
import Routes from './Routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Error Boundaries Example</h2>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ErrorBoundary>
          <Menu/>
          <Routes />
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
