import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import CardBox from '../CardBox/index';
import { Select, FormControl, InputLabel, MenuItem, TextareaAutosize } from '@material-ui/core';
//import Icon from '@material-ui/core/Icon';
//import DeleteIcon from '@material-ui/icons/Delete';
import MuiPhoneNumber from 'material-ui-phone-number';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

class EditUser extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		const { values } = this.props;

		return (
			<Modal isOpen={this.props.isOpen}>
				<ModalHeader className="modal-box-header bg-primary text-white" />
				<ModalBody>
					{/* <form onSubmit={this.props.handleSubmit} autoComplete="off" className="form">
						<h2 style={{ textAlign: 'center' }}>
							<b>Formulaire </b>
						</h2>
						<div className="d-flex flex-column col-lg-12 col-md-12 col-sm-12 justify-content-center align-items-center">
							<div className="d-flex col-lg-4 col-md-4 col-sm-4"> */}

					<form onSubmit={this.props.handleSubmit} autoComplete="off" className="form">
						<h2 style={{ textAlign: 'center' }}>
							<b>Formulaire </b>
						</h2>
						<div className="d-flex flex-column col-lg-24 col-md-24 col-sm-24 justify-content-center align-items-center">
							<div className="d-flex col-lg-8 col-md-8 col-sm-8">
								<TextField
									label="Nom"
									name="nom"
									value={values.nom}
									onChange={this.props.handleChange('nom')}
									placeholder="Entrez votre nom"
									margin="normal"
									fullWidth
									error={this.props.isNom(values.nom) === false ? true : false}
									helperText={this.props.isNom(values.nom) === false ? "nom n'est pas valideée" : ''}
								/>
							</div>
							<div className="d-flex col-lg-8 col-md-8 col-sm-8">
								<TextField
									label="Prénom"
									name="prenom"
									value={values.prenom}
									onChange={this.props.handleChange('prenom')}
									placeholder="Entrez votre prénom"
									margin="normal"
									fullWidth
									error={this.props.isPrenom(values.prenom) === false ? true : false}
									helperText={
										this.props.isPrenom(values.prenom) === false ? "Prenom n'est pas valideée" : ''
									}
								/>
							</div>

							<div className="d-flex col-lg-8 col-md-8 col-sm-8">
								<TextField
									label="Email"
									name="email"
									value={values.email}
									onChange={this.props.handleChange('email')}
									placeholder="Entrez votre email"
									margin="normal"
									fullWidth
									error={this.props.isEmail(values.email) === false ? true : false}
									helperText={
										this.props.isEmail(values.email) === false ? (
											"adresse email n'est pas valideée"
										) : (
											''
										)
									}
								/>
							</div>
							<div className="d-flex col-lg-8 col-md-8 col-sm-8">
								<MuiPhoneNumber
									variant="outlined"
									label="Téléphone"
									defaultCountry={'tn'}
									name="phone"
									value={this.props.values.phone}
									onChange={this.props.handleChangePhone}
									placeholder="(+XXX) XXX XXX XXX"
									margin="normal"
									fullWidth
									error={
										this.props.isValidphoneNumber(values.phone) === true ||
										values.phone.length === 0 ? (
											false
										) : (
											true
										)
									}
									helperText={
										this.props.isValidphoneNumber(values.phone) === true ||
										values.phone.length === 0 ? (
											''
										) : (
											"numéro téléphone n'est pas validé"
										)
									}
								/>
							</div>

							<div className="d-flex col-lg-8 col-md-8 col-sm-8">
								<TextField
									type="date"
									name="date"
									value={values.date}
									onChange={this.props.handleChange('date')}
									margin="normal"
									fullWidth
								/>
							</div>

							<div className="d-flex col-lg-8 col-md-8 col-sm-8">
								<FormControl margin="normal" fullWidth>
									<InputLabel id="fonction">Fonctions</InputLabel>
									<Select
										name="fonction"
										value={values.fonction}
										onChange={this.props.handleChange('fonction')}
									>
										<MenuItem value={'frontent'}>Developpeur Frontend</MenuItem>
										<MenuItem value={'backend'}>Developpeur Backend</MenuItem>
										<MenuItem value={'fullstack'}>Developpeur Fullstack</MenuItem>
										<MenuItem value={'devops'}>Developpeur DevOps</MenuItem>
										<MenuItem value={'designer'}>Designer</MenuItem>
									</Select>
								</FormControl>
							</div>

							<div className="d-flex col-lg-8 col-md-4 col-sm-8 d-flex mb-6">
								<TextareaAutosize
									name="description"
									placeholder="Entrez une description"
									value={values.description}
									onChange={this.props.handleChange('description')}
									margin="normal"
									fullWidth
								/>
							</div>
							<Button type="submit">
								<div
									type="button"
									class="btn btn-success"
									onChange={this.props.handleChange('description')}
								>
									{' '}
									Valider{' '}
								</div>
							</Button>
						</div>
					</form>
				</ModalBody>
			</Modal>
		);
	}
}
export default EditUser;
