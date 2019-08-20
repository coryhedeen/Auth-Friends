import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom'
import LoginForm from './components/Login';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
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
