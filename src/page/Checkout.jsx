import React from 'react';
import Header from "../component/layout/header/header";
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import {Link} from "react-router-dom";

const Checkout = () => {
    return <>
        <Header />

        <div className="inner-header">
            <div className="container">
                <div className="pull-left">
                    <h6 className="inner-title">Checkout</h6>
                </div>
                <div className="pull-right">
                    <div className="beta-breadcrumb">
                        <Link to="/">Home</Link> / <span>Checkout</span>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>

        <div className="container">
            <div id="content">
                <form action="#" method="post" className="beta-form-checkout">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>Billing Address</h4>
                            <div className="space20">&nbsp;</div>

                            <div className="form-block">
                                <label htmlFor="your_first_name">First name*</label>
                                <input type="text" id="your_first_name" required/>
                            </div>

                            <div className="form-block">
                                <label htmlFor="your_last_name">Last name*</label>
                                <input type="text" id="your_last_name" required/>
                            </div>

                            <div className="form-block">
                                <label htmlFor="company">Company name</label>
                                <input type="text" id="company"/>
                            </div>

                            <div className="form-block">
                                <label htmlFor="adress">Address*</label>
                                <input type="text" id="adress" value="Street Address" required/>
                                    <input type="text" id="apartment" value="Apartment, suite, unit etc." required/>
                            </div>

                            <div className="form-block">
                                <label htmlFor="town_city">Town / City*</label>
                                <input type="text" id="town_city" required value="Town / City*"/>
                            </div>

                            <div className="form-block">
                                <label htmlFor="country/state">Country</label>
                                <input type="text" id="country/state" value="State / Country"/>
                            </div>

                            <div className="form-block">
                                <label htmlFor="email">Email address*</label>
                                <input type="email" id="email" required/>
                            </div>

                            <div className="form-block">
                                <label htmlFor="phone">Phone*</label>
                                <input type="text" id="phone" required/>
                            </div>

                            <div className="form-block">
                                <label htmlFor="notes">Order notes</label>
                                <textarea id="notes"></textarea>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="your-order">
                                <div className="your-order-head"><h5>Your Order</h5></div>
                                <div className="your-order-body">
                                    <div className="your-order-item">
                                        <div>
                                            <div className="media">
                                                <img width="35%" src="assets/dest/images/shoping1.jpg" alt=""
                                                     className="pull-left"/>
                                                    <div className="media-body">
                                                        <p className="font-large">Men's Belt</p>
                                                        <span className="color-gray your-order-info">Color: Red</span>
                                                        <span className="color-gray your-order-info">Size: M</span>
                                                        <span className="color-gray your-order-info">Qty: 1</span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="your-order-item">
                                        <div className="pull-left"><p className="your-order-f18">Total:</p></div>
                                        <div className="pull-right"><h5 className="color-black">$235.00</h5></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="your-order-head"><h5>Payment Method</h5></div>

                                <div className="your-order-body">
                                    <ul className="payment_methods methods">
                                        <li className="payment_method_bacs">
                                            <input id="payment_method_bacs" type="radio" className="input-radio"
                                                   name="payment_method" value="bacs" checked="checked"
                                                   data-order_button_text=""/>
                                                <label htmlFor="payment_method_bacs">Direct Bank Transfer </label>
                                                <div className="payment_box payment_method_bacs"
                                                     style={{display: 'block'}}>
                                                    Make your payment directly into our bank account. Please use your
                                                    Order ID as the payment reference. Your order won’t be shipped until
                                                    the funds have cleared in our account.
                                                </div>
                                        </li>

                                        <li className="payment_method_cheque">
                                            <input id="payment_method_cheque" type="radio" className="input-radio"
                                                   name="payment_method" value="cheque" data-order_button_text=""/>
                                                <label htmlFor="payment_method_cheque">Cheque Payment </label>
                                                <div className="payment_box payment_method_cheque"
                                                     style={{display: 'none'}}>
                                                    Please send your cheque to Store Name, Store Street, Store Town,
                                                    Store State / County, Store Postcode.
                                                </div>
                                        </li>

                                        <li className="payment_method_paypal">
                                            <input id="payment_method_paypal" type="radio" className="input-radio"
                                                   name="payment_method" value="paypal"
                                                   data-order_button_text="Proceed to PayPal"/>
                                                <label htmlFor="payment_method_paypal">PayPal</label>
                                                <div className="payment_box payment_method_paypal"
                                                     style={{display: 'none'}}>
                                                    Pay via PayPal; you can pay with your credit card if you don’t have
                                                    a PayPal account
                                                </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-center"><a className="beta-btn primary" href="#">Checkout <i
                                    className="fa fa-chevron-right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <Footer />
        <Copyright />
    </>;
};

export default Checkout;
