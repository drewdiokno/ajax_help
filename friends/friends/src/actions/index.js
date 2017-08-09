import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';



export const getFriends = () => {
    const promise = axios.get('http://localhost:5000/friends');
    // Add the code for this action
    return {
           type: GET_FRIENDS,
           payload: promise, // look at reducer
    };
};