import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './App.sass';
import Landing from './components/Landing/Landing';


function App() {
  return (
    <div className="App">
    <Landing/>
    </div>
  );
}

export default App;
