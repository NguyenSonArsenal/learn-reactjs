import React, {useState} from 'react';
import Header from "../component/layout/header/header";
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import axios from "axios";
import {message} from "antd";
import {useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';

const Login = () => {
	const navigate = useNavigate();

	const KEY_TOKEN = 'access_token';

	const formValue = {
		email: '',
		password: '',
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
			const response = await axios.post('http://localhost:2222/api/login', form);
			const result = response.data;
			setDisableSubmit(false);
			if (result.success) {
				setError([]);
				message.success(result.message[0])
				setForm(formValue)

				// store cookie access_token for user
				Cookies.set(KEY_TOKEN, result.data.access_token, { path: '/' });

				setTimeout(() => {
					navigate("/profile");
				}, 1000)
				return
			}
			setMsgSuccess('')
			setError(result.message);
			return
		} catch (e) {
			console.log(e)
			if (Cookies.get(KEY_TOKEN)) {
				Cookies.remove(KEY_TOKEN, { path: '/' })
			}
		}
	}

	return <>
		<Header/>

		<div className="inner-header">
			<div className="container">
				<div className="pull-left">
					<h6 className="inner-title">Đăng nhập</h6>
				</div>
				<div className="pull-right">
					<div className="beta-breadcrumb">
						<a href="index.html">Home</a> / <span>Đăng nhập</span>
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
							<h4>Đăng nhập</h4>

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

							<div className="space20">&nbsp;</div>

							<div className="form-block">
								<label>Email *</label>
								<input type="email" name="email" value={form.email} required onChange={changeInput}/>
							</div>
							<div className="form-block">
								<label>Password *</label>
								<input type="password" name="password" value={form.password} required onChange={changeInput} />
							</div>
							<div className="form-block">
								<label htmlFor="">&nbsp;</label>
								<input type="submit" disabled={disableSubmit} className="btn btn-primary" value="Submit"/>
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

export default Login;
