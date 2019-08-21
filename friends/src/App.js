import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom'
import LoginForm from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FormikFriendMap from './components/FriendMap';

import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      friendList: {}
    }
  }



  render(){
    return (
      <div className="App">
          <div>
            <Link to='/friendlist'>Friends!</Link>
          </div>
          <div>
            <Link to='/login'>Log In</Link>
          </div>
        <PrivateRoute exact path='/friendlist'
          component={FormikFriendMap} />
        <Route exact path='/login' component={LoginForm}/>
      </div>
    );
  }

}

export default App;
