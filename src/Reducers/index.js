import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import usersReducer from "./UserReducer";





export default (history) =>
combineReducers({
    router: connectRouter(history),
    usersReducer: usersReducer,



});