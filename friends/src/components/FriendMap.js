import React from 'react';
import Friends from './FriendList';
import axios from 'axios';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { Form, Field, withFormik } from 'formik';

class FriendMap extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    friendList: []
  }
}

  componentDidMount() {
    this.fetchData();
  }

componentDidUpdate(prevProps, prevState){
  if(this.props.status !== prevProps.status){
    this.setState({
      friendList: this.props.status
    })
  }
}

  fetchData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        this.setState({
          friendList: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render(){
  return (
    <div>
      <div className="list">
        {this.state.friendList.map(friend => <Friends friend={friend}/>)}
      </div>
    <Form>
      <Field type="text" name="name" placeholder="name"/>
      <Field type="text" name="age" placeholder="age" />
      <Field type="email" name="email" placeholder="email" />
      <button type="submit">Submit</button>
    </Form>
      </div>
  )
}
}

const FormikFriendMap = withFormik({

mapPropsToValues(values){
  return {
    name: values.name || '',
    age: values.age || '',
    email: values.email || ''
  }
},

handleSubmit(values, {setStatus}){
  axiosWithAuth()
    .post('http://localhost:5000/api/friends', values)
    .then(res => {
      setStatus(res.data)
    })
    .catch(err => console.log(err))
}
})(FriendMap)

export default FormikFriendMap;
