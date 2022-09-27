import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import style from "./register.module.css"

const Register = () => {
	const navigate = useNavigate();

	const GENDER_BOY = 1;
	const GENDER_GIRL = 2;

	const formValue = {
		email: '',
		username: '',
		address: '',
		phone: '',
		password: '',
		password_confirmation: '',
		birthday: '',
		gender: GENDER_BOY,
	}

	const [disableSubmit, setDisableSubmit] = useState(false)
	const [form, setForm] = useState(formValue)
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
		setDisableSubmit(true);
		try {
			const response = await axios.post('http://localhost:2222/api/register', form);
			const result = response.data;
			setDisableSubmit(false);
			if (result.success) {
				setError([]);
				message.success(result.message[0])
				setForm(formValue)
				setTimeout(() => {
					navigate("/login");
				}, 1000)
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
								<label htmlFor="your_last_name">Username *</label>
								<input type="text" name="username" value={form.username} required onChange={changeInput}/>
							</div>

							<div className="form-block">
								<label htmlFor="email">Email *</label>
								<input type="email" name="email" value={form.email} required onChange={changeInput}/>
							</div>

							<div className="form-block">
								<label htmlFor="phone">Phone *</label>
								<input type="text" name="phone" value={form.phone} onChange={changeInput} required/>
							</div>

							<div className="form-block">
								<label htmlFor="phone">Password *</label>
								<input type="password" name="password" value={form.password} onChange={changeInput} required/>
							</div>

							<div className="form-block">
								<label htmlFor="phone">Re-password *</label>
								<input type="password" name="password_confirmation" value={form.password_confirmation}
											 onChange={changeInput} required />
							</div>

							<div className="form-block">
								<label htmlFor="adress">Address</label>
								<input type="text" name="address" value={form.address} onChange={changeInput}/>
							</div>

							<div className="form-block">
								<label htmlFor="phone">Birthday</label>
								<input type="date" name="birthday" value={form.birthday} onChange={changeInput}/>
							</div>

							<div className="form-block">
								<label className={`${style.lbl_gender}`}>Gender</label>
								<div className={`${style.inputGender}`}>
									<label htmlFor="gender">
										<input type="radio" id="gender" name="gender" checked={form.gender == GENDER_BOY}
													 value={GENDER_BOY} onChange={changeInput} />Boy
									</label>
									<label htmlFor="gender2">
										<input type="radio" id="gender2" name="gender" checked={form.gender == GENDER_GIRL}
													 value={GENDER_GIRL} onChange={changeInput}/>Girl
									</label>
								</div>
							</div>

							<div className="form-block">
								<label htmlFor="">&nbsp;</label>
								<input type="submit" disabled={disableSubmit} className="btn btn-primary" value="Register"/>
							</div>
						</div>
						<div className="col-sm-3"></div>
					</div>
				</form>
			</div>
		</div>
	</>;
};

export default Register;
