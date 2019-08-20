import React from 'react';
import Friends from './FriendList';

const FriendMap = props => {
  return (
    <div>
      {props.friendList.map(friend => <Friends friend={friend}/>)}
    </div>
  )
}

export default FriendMap;
