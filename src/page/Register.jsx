import React from 'react';
import Header from "../component/layout/header/header";
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import {Link} from "react-router-dom";

const Register = () => {
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

                <form action="#" method="post" className="beta-form-checkout">
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            <h4>Đăng kí</h4>
                            <div className="space20">&nbsp;</div>


                            <div className="form-block">
                                <label htmlFor="email">Email address*</label>
                                <input type="email" id="email" required/>
                            </div>

                            <div className="form-block">
                                <label htmlFor="your_last_name">Fullname*</label>
                                <input type="text" id="your_last_name" required/>
                            </div>

                            <div className="form-block">
                                <label htmlFor="adress">Address*</label>
                                <input type="text" id="adress" value="" required/>
                            </div>


                            <div className="form-block">
                                <label htmlFor="phone">Phone*</label>
                                <input type="text" id="phone" required/>
                            </div>
                            <div className="form-block">
                                <label htmlFor="phone">Password*</label>
                                <input type="text" id="phone" required/>
                            </div>
                            <div className="form-block">
                                <label htmlFor="phone">Re password*</label>
                                <input type="text" id="phone" required/>
                            </div>
                            <div className="form-block">
                                <button type="submit" className="btn btn-primary">Register</button>
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
