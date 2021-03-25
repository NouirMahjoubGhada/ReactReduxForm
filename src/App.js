import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './Components/Users/User';
import EditUser from './Components/Users/EditUser';
import UserList from './Components/Users/UserList';
import { Provider } from 'react-redux';
import configureStore, { history } from './Redux/ConfigStore';


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
