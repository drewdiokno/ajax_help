import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { newFriends } from '../actions/new_friends';
import { getFriends } from '../actions';
// import axios from 'axios';

class Friendslist extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <form>
          <p>Name:</p><br />
          <input type="text" name="firstname" value="First" />
          <br />
          <p>Age:</p><br /> 
          <input type="text" name="lastname" value="Age" />
          <p>Email:</p><br /> 
          <input type="text" name="lastname" value="Email" />
          <br /><br />
          <input type="submit" value="Submit" /> 
        </form>
        <ul>
          {this.props.friends.map((friend, i) => {
            return (
              <li key={i}>
                <p>{`Friend ${i+1}`}</p>
                <p>{`Name: ${friend.name}`}</p>
                <p>{`Age: ${friend.age}`}</p>
                <p>{`Email: ${friend.email}`}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { getFriends })(Friendslist)