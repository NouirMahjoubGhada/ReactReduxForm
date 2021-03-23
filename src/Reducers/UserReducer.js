import { ADD_USER, DELETE_USER, GET_USER, EDIT_USER } from '../Constantes/ActionTypes';

const initialState = {
	users: []
};
export default function(state = initialState, action) {
	if (action.type === ADD_USER) {
		return Object.assign({}, state, {
			users: state.users.concat(action.payload)
		});
	}

	if (action.type === GET_USER) {
		return Object.assign({}, state, {
			users: action.payload
		});
	}

	if (action.type === DELETE_USER) {
		return Object.assign({}, state, {
			users: [ ...state.users.filter((element) => element.id !== action.payload) ]
		});
	}
	if (action.type === EDIT_USER) {
		console.log(
			action.payload.data,
			'++++++HAHAHAHHAHAHAHAHAHA+++++++',
			action.payload.index,
			'+++++++INDEX++++++'
		);
		return Object.assign({}, state, {
			users: [ ...state.users.filter((element) => element.id !== action.payload.id), action.payload, ] 
		});
	}

	return state;
}
