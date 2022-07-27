import React from 'react';
import Header from "../component/layout/header/header";
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import {Link} from "react-router-dom";

const Register = () => {
    // local variables
    const formValue = {
        email: '',
        full_name: '',
        address: '',
        phone: '',
        password: '',
        password_confirmation: '',
    }

    const [form, setForm] = React.useState(formValue)

    const changeInput = e => {
        const {name, value} = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(form);
    }

    return <>
        <Header />

        <div className="inner-header">
            <div className="container">
                <div className="pull-left">
                    <h6 className="inner-title">Đăng kí</h6>
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
                            <div className="space20">&nbsp;</div>

                            <div className="form-block">
                                <label htmlFor="email">Email address*</label>
                                <input type="email" name="email" value={form.email} required
                                       onChange={changeInput}
                                       />
                            </div>

                            <div className="form-block">
                                <label htmlFor="your_last_name">Fullname*</label>
                                <input type="text" value={form.full_name} name="full_name"
                                       onChange={changeInput}
                                />
                            </div>

                            <div className="form-block">
                                <label htmlFor="adress">Address*</label>
                                <input type="text" name="address" value={form.address}
                                       onChange={changeInput}
                                />
                            </div>

                            <div className="form-block">
                                <label htmlFor="phone">Phone*</label>
                                <input type="text" name="phone" value={form.phone}
                                       onChange={changeInput}
                                />
                            </div>

                            <div className="form-block">
                                <label htmlFor="phone">Password*</label>
                                <input type="text" name="password" value={form.password}
                                       onChange={changeInput}
                                />
                            </div>

                            <div className="form-block">
                                <label htmlFor="phone">Re password*</label>
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

        <Footer />
        <Copyright />
    </>;
};

export default Register;
