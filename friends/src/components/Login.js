import React from 'react';
import Loader from 'react-loader-spinner';

const LoginForm = props => {
  return(
    <form onSubmit={props.submitHandler}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={props.username}
        onChange={props.changeHandler}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={props.password}
        onChange={props.changeHandler}
      />
      <button type="submit">{props.isLoading ? (
        <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
      ) : ("Submit")}</button>
    </form>
  )
}

export default LoginForm;
