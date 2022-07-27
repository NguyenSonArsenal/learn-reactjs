import React, {useState} from 'react';
import Header from "../component/layout/header/header";
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import {Link} from "react-router-dom";
import axios from "axios";

const Register = () => {
	const [form, setForm] = useState({
		email: '',
		username: '',
		address: '',
		phone: '',
		password: '',
		password_confirmation: '',
	})

	const [error, setError] = useState([]);
	const [msgSuccess, setMsgSuccess] = useState('');

	const changeInput = e => {
		const {name, value} = e.target;
		setForm(prevState => ({
			...prevState,
			[name]: value
		}));
	}

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:2222/api/register', form);
			const result = response.data;
			if (result.success) {
				setError([]);
				setMsgSuccess(result.message);
				// @todo clear value form input
				return
			}
			setMsgSuccess('')
			setError(result.message);
			return
		} catch (e) {
			console.log(e)
		}
	}

	return <>
		<Header/>

		<div className="inner-header">
			<div className="container">
				<div className="pull-left">
				</div>
				<div className="pull-right">
					<div className="beta-breadcrumb">
						<Link to="/">Home</Link> / <span>Đăng kí</span>
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
		</div>

		<div className="container">
			<div id="content">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-sm-3"></div>
						<div className="col-sm-6">
							<h4>Đăng kí</h4>

							{
								error.length > 0 &&
								<div className={'mb-3'} style={{marginBottom: "15px"}}>
									<ul>
										{error.map(function(object, i){
											return <li className={'text-danger'}>{object}</li>
										})}
									</ul>
								</div>
							}

							{
								msgSuccess &&
								<div className={'mb-3'} style={{marginBottom: "15px"}}>
									<ul>
											<li className={'text-success'}>{msgSuccess}</li>
									</ul>
								</div>
							}

							<div className="form-block">
								<label htmlFor="email">Email *</label>
								<input type="email" name="email" value={form.email} required
											 onChange={changeInput}
								/>
							</div>

							<div className="form-block">
								<label htmlFor="your_last_name">Username *</label>
								<input type="text" name="username" value={form.username} required
											 onChange={changeInput}
								/>
							</div>

							<div className="form-block">
								<label htmlFor="adress">Address *</label>
								<input type="text" name="address" value={form.address}
											 onChange={changeInput}
								/>
							</div>

							<div className="form-block">
								<label htmlFor="phone">Phone *</label>
								<input type="text" name="phone" value={form.phone}
											 onChange={changeInput}
								/>
							</div>

							<div className="form-block">
								<label htmlFor="phone">Password *</label>
								<input type="text" name="password" value={form.password}
											 onChange={changeInput}
								/>
							</div>

							<div className="form-block">
								<label htmlFor="phone">Re-password *</label>
								<input type="text" name="password_confirmation" value={form.password_confirmation}
											 onChange={changeInput}
								/>
							</div>

							<div className="form-block">
								<input type="submit" className="btn btn-primary" value="Register"/>
							</div>
						</div>
						<div className="col-sm-3"></div>
					</div>
				</form>
			</div>
		</div>

		<Footer/>
		<Copyright/>
	</>;
};

export default Register;
