import { ADD_USER, GET_USER, DELETE_USER, EDIT_USER } from '../../Constants/ActionTypes';
import axios from 'axios';

export function addUser(data) {
    console.log(data,"+++++++HAHAHAHAHAHHA++++++++++)")
	return (dispatch) => {
		axios
			.post(`http://127.0.0.1:3000/users`, data)
			.then((response) => {
				if (response) {
					dispatch({ type: ADD_USER, payload: data });
				}
			})
			.catch(function(error) {});
	};
}

export function deleteUser(data) {
	return (dispatch) => {
		axios
			.delete(`http://127.0.0.1:3000/users/${data}`)
			.then((response) => {
				if (response) {
					dispatch({ type: DELETE_USER, payload: data });
				}
			})
			.catch(function(error) {});
	};
}

export function editUser(data) {
	return (dispatch) => {
		axios
			.patch(`http://127.0.0.1:3000/users/${data.id}`, data)
			.then((response) => {
				if (response) {
					dispatch({ type: EDIT_USER, payload: data });
				}
			})
			.catch(function(error) {});
	};
}

export function getUser(data) {
	return (dispatch) => {
		axios
			.get(`http://127.0.0.1:3000/users`)
			.then((response) => {
				if (response) {
					dispatch({ type: GET_USER, payload: response.data });
				}
			})
			.catch(function(error) {});
	};
}
