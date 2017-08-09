import axios from 'axios';

export const NEW_FRIENDS = 'NEW_FRIENDS';

export const newFriends = () => {
    const promise = axios.post('http://localhost:5000/newfriend');
    // Add the code for this action
    return {
           type: NEW_FRIENDS,
           payload:  promise, // look at reducer
    };
};