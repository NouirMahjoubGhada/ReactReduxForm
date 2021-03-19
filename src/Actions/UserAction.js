import {ADD_USER, DELETE_USER, EDIT_USER} from "../Constantes/ActionTypes";

export function addUser(data) {
    return (dispatch) => {
        dispatch({ type: ADD_USER, payload: data });
    }
}

export function deleteUser(index) {
    return (dispatch) => {
        dispatch({ type: DELETE_USER, payload: index });
    }
}

export function editUser(index, data) {
    return (dispatch) => {
        dispatch({ type: EDIT_USER, payload: {index , data }});
    }
}