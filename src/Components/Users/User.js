import React, { Component } from 'react';
import AddUser from './AddUser';
import { addUser, getUser, deleteUser } from '../../Redux/Actions/UserAction';
import UserList from './UserList';
import CardBox from '../CardBox/index';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { connect } from 'react-redux';
import moment from 'moment';



class User extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false,
			nom: '',
			prenom: '',
			email: '',
			phone: '',
			date: '',
			fonction: '',
			description: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleChangePhone = this.handleChangePhone.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(getUser());
		this.setState({
			userList: this.props.userList
		});
	}

	// this will update our component
	componentDidUpdate(prevProps) {
		if (prevProps.userList !== this.props.userList) {
			this.setState({
				userList: this.props.userList
			});
		}
	}



	handleSubmit(event) {
		 event.preventDefault();

		let data = {
			nom: this.state.nom,
			prenom: this.state.prenom,
			email: this.state.email,
			phone: this.state.phone,
			date: new Date(this.state.date),
			fonction: this.state.fonction,
			description: this.state.description
		};
		this.props.dispatch(addUser(data));

		this.setState({
			nom: '',
			prenom: '',
			email: '',
			phone: '',
			date: '',
			fonction: '',
			description: ''
		});
		console.log(data);
	}
	handleChange = (name) => (event) => {
		this.setState({ [name]: event.target.value }, () => console.log('name', event.target.value));
		
	};
	
	handleChangePhone = (value) => {
		this.setState({ phone: value });
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

	isDesc(value) {
		if (value != null) {
			if (value.length > 0) return /^[A-Za-z]+/.test(value);
			else return true;
		} else {
			return false;
		}
	}
	
	render() {
		return (
			<div className="app-wrapper" style={{}}>
				<div className="  d-flex flex-column mb-3">
					<div className=" bd-highlight">
						<CardBox styleName="col-lg-12">
							<AddUser
								handleChange={this.handleChange}
								handleChangePhone={this.handleChangePhone}
								handleSubmit={this.handleSubmit}
								values={this.state}
								isNom={this.isNom}
								isPrenom={this.isPrenom}
								isEmail={this.isEmail}
								isPhonenumber={this.isPhonenumber}
								isZipCode={this.isZipCode}
								isValidphoneNumber={this.isValidphoneNumber}
								isDesc={this.isDesc}
							/>
						</CardBox>
					</div>

					<div className=" bd-highlight" style={{ width: '90%' }}>
						<CardBox styleName="col-lg-12">
							<UserList />
						</CardBox>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userList: state.usersReducer.users
	};
};
export default connect(mapStateToProps)(User);
