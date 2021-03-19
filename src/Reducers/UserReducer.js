import { ADD_USER, DELETE_USER, EDIT_USER } from '../Constantes/ActionTypes';

const initialState = {
	users: []
};
export default function(state = initialState, action) {
	if (action.type === ADD_USER) {
		return Object.assign({}, state, {
			users: state.users.concat(action.payload)
		});
	}

	if (action.type === DELETE_USER) {
		return Object.assign({}, state, {
			users: [ ...state.users.filter((element, index) => index !== action.payload) ]
		});
	}
	if (action.type === EDIT_USER) {
        console.log(action.payload.data,"++++++HAHAHAHHAHAHAHAHAHA+++++++",action.payload.index,"+++++++INDEX++++++")
		return Object.assign({}, state, {

			users: [ 
                ...state.users.filter((element, index) => index !== action.payload.index),
                 action.payload.data,


             ]
		});
	}

	return state;
}
