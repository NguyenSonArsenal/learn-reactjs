import React, {useState} from 'react';
import Header from "../component/layout/header/header";
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {message} from "antd";

const Profile = () => {
	const navigate = useNavigate();
	const [profile] = useState('Nguyen Son Arsenal')
	const [error, setError] = useState([]);

	const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjIyMjIvYXBpL2xvZ2luIiwiaWF0IjoxNjU5MzQ5MzY2LCJleHAiOjE2NTkzNDk2NjYsIm5iZiI6MTY1OTM0OTM2NiwianRpIjoiNmp4RkxuNUp6cEhCYXF6YSIsInN1YiI6IjEwMDAxMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.z0UicoqPgJFyiQM8hdiiAIt_fYba2Yue5fZVhn_9tI0';

	const logout = async () => {
		try {
			const config = {
				headers: { Authorization: `Bearer ${token}` }
			};

			const bodyParameters = {
				key: "value"
			};

			const response = await axios.post('http://localhost:2222/api/logout', bodyParameters, config);

			const result = response.data;
			if (result.success) {
				message.success(result.message)
				setTimeout(() => {
					navigate("/login");
				}, 1000)
				return
			}
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
					Chào mừng <span style={{color: "red"}}>{ profile }</span> tới với website của chúng tôi
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
