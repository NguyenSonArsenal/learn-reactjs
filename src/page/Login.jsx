import React from 'react';
import Header from "../component/layout/header/header";
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";

const Login = () => {
    return <>
        <Header />

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

                <form action="#" method="post" className="beta-form-checkout">
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            <h4>Đăng nhập</h4>
                            <div className="space20">&nbsp;</div>


                            <div className="form-block">
                                <label htmlFor="email">Email address*</label>
                                <input type="email" id="email" required/>
                            </div>
                            <div className="form-block">
                                <label htmlFor="phone">Password*</label>
                                <input type="text" id="phone" required/>
                            </div>
                            <div className="form-block">
                                <button type="submit" className="btn btn-primary">Login</button>
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

export default Login;
