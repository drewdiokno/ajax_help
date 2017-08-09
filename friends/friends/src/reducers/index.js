import { combineReducers } from 'redux';
import { GET_FRIENDS } from '../actions';
import { NEW_FRIENDS } from '../actions/new_friends';

const friendsReducer = (friends = [], action) => {
    switch(action.type) {
        case NEW_FRIENDS:
        case GET_FRIENDS:
            return action.payload.data;
            // console.log(action);
            // return [];
        default:
            return friends;
    }
};

const rootReducer = combineReducers({
    friends: friendsReducer
});

export default rootReducer;