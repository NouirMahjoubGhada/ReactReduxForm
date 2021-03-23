import React from 'react';
import ReactDOM from 'react-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import EditUser from './EditUser';
import _ from 'lodash';
import UserListItem from './UserListItem';
import { deleteUser, editUser } from '../../Actions/UserAction';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import moment from 'moment';

class UserList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 0,
			isOpen:false,
			nom: '',
			prenom: '',
			email: '',
			date: '',
			phone: '',
			fonction: '',
			description: ''
		};

		//----------------------------------------- Add this --------------------------------

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete = (userId, event) => {
		event.preventDefault();
		this.props.dispatch(deleteUser(userId));
	};

	handleEdit = (item, event) => {
		event.preventDefault();
		this.setState({
			id: item.id,
			isOpen: true,
			nom: item.nom,
			prenom: item.prenom,
			email: item.email,
			phone: item.phone,
			date: moment(item.date).format("YYYY-MM-DD"),
			fonction: item.fonction,
			description: item.description
		});
	};

	handleSubmit(event) {
		event.preventDefault();

		let data = {
			id: this.state.id,
			nom: this.state.nom,
			prenom: this.state.prenom,
			email: this.state.email,
			phone: this.state.phone,
			date: new Date(this.state.date),
			fonction: this.state.fonction,
			description: this.state.description
		};
		this.props.dispatch(editUser(data));
		this.setState({
			isOpen: false
		});
	}

	handleChange = (name) => (event) => {
		this.setState({ [name]: event.target.value }, () => console.log('name', event.target.value));
	};

	isNom(value) {
		if (value != null) {
			if (value.length > 0) return /^[A-Za-z]+/.test(value);
			else return true;
		} else {
			return false;
		}
	}

	isPrenom(value) {
		if (value != null) {
			if (value.length > 0) return /^[A-Za-z]+/.test(value);
			else return true;
		} else {
			return false;
		}
	}
	isEmail(value) {
		if (value != null) {
			if (value.length > 0)
				return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
					value
				);
			else return true;
		} else {
			return false;
		}
	}

	isPhonenumber(str) {
		if (str.length > 1) return /^[2-9]\d{7}$/.test(str);
		else return true;
	}

	isValidphoneNumber = (phone) => {
		console.log('isValidphoneNumber', phone);
		const tel = parsePhoneNumberFromString(phone);
		let res = false;
		if (tel) {
			res = tel.isValid();
		}

		return res;
	};

	render() {
		return (


			<div className="div">
				<Table className="table">
					<TableHead>
						<TableRow className="row">
							<TableCell>
								<div>Nom</div>
							</TableCell>
							<TableCell>
								<div>Prénom</div>
							</TableCell>
							<TableCell>
								<div>Email</div>
							</TableCell>
							<TableCell>
								<div>Date de naissance</div>
							</TableCell>
							<TableCell>
								<div>Phone</div>
							</TableCell>
							<TableCell>
								<div>Fonction</div>
							</TableCell>
							<TableCell>
								<div>Description</div>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.props.userList.map((UserItem, index) => {
							console.log(UserItem, '+++++++fffff++++');
							return (
								<UserListItem
									UserItem={UserItem}
									handleEdit={this.handleEdit}
									handleDelete={this.handleDelete}
								/>
							);
						})}
					</TableBody>
				</Table>
				
				{this.state.isOpen ? (
					<EditUser
						users={this.state.item}
						isOpen={this.state.isOpen}
						values={this.state}
						handleEdit={this.handleEdit}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
						isNom={this.isNom}
						isPrenom={this.isPrenom}
						isEmail={this.isEmail}
						isPhonenumber={this.isPhonenumber}
						isZipCode={this.isZipCode}
						isValidphoneNumber={this.isValidphoneNumber}
					/>
				) : (
					''
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userList: state.usersReducer.users
	};
};

export default connect(mapStateToProps)(UserList);
