import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './Components/Users/User';
import EditUser from './Components/Users/EditUser';
// import DeleteUser from './Components/Users/DeleteUser';
import UserList from './Components/Users/UserList';
import { Provider } from 'react-redux';
import configureStore, { history } from './store';


export const store = configureStore();

function App() {
	return (
		<div>
			<Provider store={store}>
				<User />
			</Provider>
		</div>
	);
}

export default App;
