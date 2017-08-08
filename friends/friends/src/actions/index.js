import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

const promise = axios.get('http:localhost:5000/friends');

export const getFriends = () => {
    // Add the code for this action
    return {
           type: GET_FRIENDS,
           payload:  promise, // look at reducer
    };
};