import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Select, FormControl, InputLabel, MenuItem, TextareaAutosize } from '@material-ui/core';
import MuiPhoneNumber from 'material-ui-phone-number';


class AddUser extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		const { values } = this.props;

		return (
			<form onSubmit={this.props.handleSubmit} autoComplete="off" className="form">
				<p className="form" >Form Contact</p>
				<div className="d-flex flex-column col-lg-12 col-md-12 col-sm-12 justify-content-center align-items-center">
					<div className="d-flex col-lg-4 col-md-4 col-sm-4">
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
					<div className="d-flex col-lg-4 col-md-4 col-sm-4">
						<TextField
							label="Prénom"
							name="prenom"
							value={values.prenom}
							onChange={this.props.handleChange('prenom')}
							placeholder="Entrez votre prénom"
							margin="normal"
							fullWidth
							error={this.props.isPrenom(values.prenom) === false ? true : false}
							helperText={this.props.isPrenom(values.prenom) === false ? "Prenom n'est pas valideée" : ''}
						/>
					</div>

					<div className="d-flex col-lg-4 col-md-4 col-sm-4">
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
								this.props.isEmail(values.email) === false ? "adresse email n'est pas valideée" : ''
							}
						/>
					</div>
					<div className="d-flex col-lg-4 col-md-4 col-sm-4">
						<MuiPhoneNumber
							required
							variant="outlined"
							label="Téléphone"
							defaultCountry={'tn'}
							name="phone"
							// country={this.props.values.countrie_locale === "ar" ? "tn" : "fr"}
							value={values.phone}
							onChange={this.props.handleChangePhone}
							placeholder="(+XXX) XXX XXX XXX"
							margin="normal"
							fullWidth
							error={
								this.props.isValidphoneNumber(values.phone) === true || values.phone.length === 0 ? (
									false
								) : (
									true
								)
							}
							helperText={
								this.props.isValidphoneNumber(values.phone) === true || values.phone.length === 0 ? (
									''
								) : (
									"numéro téléphone n'est pas validé"
								)
							}
						/>
					</div>

					<div className="d-flex col-lg-4 col-md-4 col-sm-4">
						<TextField
							required
							type="date"
							name="date"
							value={values.date}
							onChange={this.props.handleChange('date')}
							margin="normal"
							fullWidth
						/>
					</div>

					<div className="d-flex col-lg-4 col-md-4 col-sm-4">
						<FormControl margin="normal" fullWidth>
							<InputLabel id="fonction">Fonctions</InputLabel>
							<Select
								required
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
					<br />

					<div className="d-flex col-lg-4 col-md-4 col-sm-4 d-flex mb-3">
						<TextareaAutosize
							name="description"
							placeholder="Entrez une description"
							value={values.description}
							onChange={this.props.handleChange('description')}
							margin="normal"
							fullWidth
						/>
					</div>

					<div className="d-flex flex-wrap justify-content-end p-3">
						{/* <Button type="submit">
							<div className="btn btn-danger mr-1" color="danger">
								{' '}
								Annuler{' '}
							</div>
						</Button> */}

						<Button
							type="submit"
							disabled={
								!this.props.isNom(values.nom) ||
								!this.props.isPrenom(values.prenom) ||
								!this.props.isEmail(values.email) ||
								!this.props.isValidphoneNumber(values.phone)
							}
						>
							<div className="btn btn-primary" onChange={this.props.handleChange}>
								{' '}
								Valider{' '}
							</div>
						</Button>
					</div>
				</div>
			</form>
		);
	}
}

export default AddUser;
