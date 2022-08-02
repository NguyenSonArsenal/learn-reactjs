import React, {useEffect, useState} from 'react';
import Header from "../component/layout/header/header";
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {message} from "antd";
import Cookies from 'js-cookie';

const Profile = () => {
	const KEY_TOKEN = 'access_token';
	const navigate = useNavigate();

	const [profile, setProfile] = useState({})
	const [error] = useState([]);

	useEffect(() => {
		async function getProfile() {
			const token = Cookies.get(KEY_TOKEN, { path: '/' });

			const config = {
				headers: {Authorization: `Bearer ${token}`}
			};

			const response = await axios.get('http://localhost:2222/api/profile', config);
			const result = response.data;
			if (result.success) {
				setProfile(result.data);
				return
			}
			setTimeout(() => {
				navigate("/login");
			}, 1000)
		}

		getProfile();
	}, [])

	const logout = async () => {
		try {
			const token = Cookies.get(KEY_TOKEN, { path: '/' });
			const config = {
				headers: { Authorization: `Bearer ${token}` }
			};
			const params = {};
			const response = await axios.post('http://localhost:2222/api/logout', params, config);
			const result = response.data;
			if (result.success) {
				message.success(result.message)
			}
			Cookies.remove(KEY_TOKEN, { path: '' })
			setTimeout(() => {
				navigate("/login");
			}, 1000)
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
					<h6 className="inner-title">Thông tin cá nhân</h6>
				</div>
				<div className="pull-right">
					<div className="beta-breadcrumb">
						<a href="index.html">Home</a> / <span>Thông tin cá nhân</span>
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
		</div>

		<div className="container">
			<div id="content">
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

				<p>
					Chào mừng <span style={{color: "red"}}>{ profile?.email }</span> tới với website của chúng tôi
				</p>

				<p>
					<Link to={`#`} onClick={() => {
						if (window.confirm('Đăng xuất. Bạn có chắc không?')) {
							logout()
						}
					}}>Đăng xuất</Link>
				</p>
			</div>
		</div>
		<Footer/>
		<Copyright/>
	</>;
};

export default Profile;
