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

class UserList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: '',
			nom: '',
			prenom: '',
			email: '',
			date: '',
			phone: '',
			fonction: '',
			description: ''
		};

		//----------------------------------------- Add this --------------------------------

		// this.handleDelete = this.handleDelete.bind(this);
		// this.handleEdit = this.handleEdit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete = (userIndex, event) => {
		event.preventDefault();
		// to use action you should add "connect"
		console.log(userIndex);

		this.props.dispatch(deleteUser(userIndex));
	};

	handleEdit = (item, index, event) => {
		event.preventDefault();
		this.setState({
			index: index,
			isOpen: true,
			nom: item.nom,
			prenom: item.prenom,
			email: item.email,
			phone: item.phone,
			date: item.date,
			fonction: item.fonction,
			description: item.description
		});
	};

	handleSubmit(event) {
		event.preventDefault();

		let data = {
			nom: this.state.nom,
			prenom: this.state.prenom,
			email: this.state.email,
			phone: this.state.phone,
			date: this.state.date,
			fonction: this.state.fonction,
			description: this.state.description
		};
		this.props.dispatch(editUser(this.state.index, data));
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
									Index={index}
									handleEdit={this.handleEdit}
									handleDelete={this.handleDelete}
								/>
							);
						})}
					</TableBody>
				</Table>
				{/* <TableContainer component={Paper}>
					<Table className={classes.table} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>Dessert (100g serving)</StyledTableCell>
								<StyledTableCell align="right">Calories</StyledTableCell>
								<StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
								<StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
								<StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<StyledTableRow key={row.name}>
									<StyledTableCell component="th" scope="row">
										{row.name}
									</StyledTableCell>
									<StyledTableCell align="right">{row.calories}</StyledTableCell>
									<StyledTableCell align="right">{row.fat}</StyledTableCell>
									<StyledTableCell align="right">{row.carbs}</StyledTableCell>
									<StyledTableCell align="right">{row.protein}</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				); */}
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
