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
import CreatePost from './components/CreatePost/CreatePost';
import EditPost from './components/EditPost/EditPost';
import UpdatePost from './components/UpdatePost/UpdatePost';
import Posts from './components/Posts/Posts';




const App = () => {

  return (
    <div className="App">
      <Router>
              <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/about" exact component={About}/>
                <AuthenticatedRoute path="/home" component={EditorHome}/>
                <AuthenticatedRoute path="/create" component={CreatePost}/>
                <AuthenticatedRoute path="/edit" component={EditPost}/>
                <AuthenticatedRoute path="/update" component={UpdatePost}/>
                <AuthenticatedRoute path="/posts" component={Posts}/>
              </Switch>
          </Router>
    </div>
  );
}

export default App;
