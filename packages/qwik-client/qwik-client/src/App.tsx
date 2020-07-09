import React from 'react';
import './App.sass';
import Landing from './components/Landing/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About/About';
import EditorHome from './components/EditorHome/EditorHome';
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute';




const App = () => {

  return (
    <div className="App">
      <Router>
              <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/about" exact component={About}/>
                <AuthenticatedRoute path="/home" component={EditorHome}/>
                {/* <AuthenticatedRoute path="/home" component={EditorHome}/> */}
              </Switch>
          </Router>
    </div>
  );
}

export default App;
