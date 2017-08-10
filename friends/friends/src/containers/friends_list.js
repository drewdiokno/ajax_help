import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newFriends } from '../actions/new_friends';
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
           <input type="text" name="firstname" value="First"
              onChange={this.newFriends}
              placeholder="Name..."
              value={this.newFriends} />   
          <br />
          <p>Age:</p><br /> 
          <input type="text" name="Age" value="Age"
            onChange={this.newFriends}
            placeholder="Age..."
            value={this.newFriends} />
          <p>Email:</p><br /> 
          <input type="text" name="Email" value="Email"
            onChange={this.newFriends}
            placeholder="E-Mail..."
            value={this.newFriends} />
          <br /><br />
          <input type="submit" value="Submit" onSubmit={this.newFriends} /> 
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

            // <div>
            //      <form onSubmit={this.addTodo}> 
            //         <input 
            //             onChange={this.updateNewTodo}
            //             placeholder="new todo..."
            //             value={this.state.newTodo}
            //         />
            //     </form>
            //     <List todos={this.state.todos} />
            // </div>

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { getFriends })(Friendslist)