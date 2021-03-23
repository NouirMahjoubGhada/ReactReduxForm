import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import _ from 'lodash';
import moment from 'moment';

    
export default class UserListItem extends Component {
			render() {
				const  { UserItem, handleEdit, handleDelete }  = this.props; //take only the pros "UserItem"UserItem
				console.log(UserItem,"+++++++++HAHAHAHAHAHAHAHAHAHHA++++++++")
				return (
					<TableRow >
						<TableCell className="row1">{UserItem.nom}</TableCell>
						<TableCell className="row1">{UserItem.prenom}</TableCell>
						<TableCell className="row1">{UserItem.email}</TableCell>
						<TableCell className="row1">{moment(UserItem.date).format("YYYY-MM-DD")}</TableCell>
						<TableCell className="row1">{UserItem.phone}</TableCell>
						<TableCell className="row1">{UserItem.fonction}</TableCell>
						<TableCell className="row1">{UserItem.description}</TableCell>
						<TableCell>
						<div className="d-flex flex-wrap justify-content-end p-3">
							<Button type="button" class="btn btn-warning" 
							onClick={(e) => this.props.handleEdit(UserItem, e)}>
							{' '}
							Edit{' '}
						
							</Button> 

							<Button type="button" class="btn btn-dark" 
								onClick={(e) => this.props.handleDelete(UserItem.id, e)}
							>
								<div className="delete">Delete</div>
								<i class="zmdi zmdi-delete"></i>
							</Button>
							</div>

							
						</TableCell>


					</TableRow>
				);
			}
		}
	