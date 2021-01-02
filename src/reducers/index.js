import { GET_DATA } from '../actions/types';
import { combineReducers } from 'redux';


const getDataReducer = (state = [], action) => {
    switch(action.type) {
        case GET_DATA:
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    socialCardArr : getDataReducer
});