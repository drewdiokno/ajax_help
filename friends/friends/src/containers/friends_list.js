import React from 'react'
import { connect } from 'react-redux'
import { NEW_FRIENDS }from '../actions/new_friends';


let friendsId = 0;
const addFriend = (
  text
) => {
  return {
    type: 'NEW_FRIENDS',
    id: friendsId++,
    text
  }
}

let addFriend = ({ dispatch }) => {
  let input
  
  return (
    <div>
      <input ref={node => input = node} />
      <button onClick={() => {
          dispatch(addFriend(input.value))
          input.value = ''
        }}>
          Add friend
      </button>
    </div>
  )
}


addFriend = connect()(addFriend);

export default addFriend;