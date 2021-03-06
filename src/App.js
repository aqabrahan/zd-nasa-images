import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Home, NasaPhoto } from './components'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Route component={Home} exact path="/" />
          <Route component={NasaPhoto} path="/nasaphoto" />
      </div>
    </BrowserRouter>
  );
}

export default App;
