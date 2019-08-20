import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom'
import LoginForm from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendMap from './components/FriendMap';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      friendList: {},
      username: '',
      password: '',
      isLoading: false
    }
  }

submitHandler = e => {
  e.preventDefault()
}

changeHandler = e => {
  console.log('typing', e)
  this.setState({[e.target.name]: e.target.value})
}

  render(){
    return (
      <div className="App">
        <PrivateRoute path='/friendlist'
          render={props =>
          <FriendMap friendList={this.state.friendList}/>} />
        <Route path='/login' render={props =>
          <LoginForm
            username={this.state.username}
            password={this.state.password}
            submitHandler={this.submitHandler}
            changeHandler={this.changeHandler}
            isLoading={this.isLoading}/>}/>
      </div>
    );
  }

}

export default App;
