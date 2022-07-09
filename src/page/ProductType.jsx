import React from 'react';
import Header from "../component/layout/header/header";
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import {Link} from "react-router-dom";

const ProductType= () => {
    return <>
        <Header />

        <div className="inner-header">
            <div className="container">
                <div className="pull-left">
                    <h6 className="inner-title">Sản phẩm</h6>
                </div>
                <div className="pull-right">
                    <div className="beta-breadcrumb font-large">
                        <Link to="/">Home</Link> / <span>Sản phẩm</span>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
        <div className="container">
            <div id="content" className="space-top-none">
                <div className="main-content">
                    <div className="space60">&nbsp;</div>
                    <div className="row">
                        <div className="col-sm-3">
                            <ul className="aside-menu">
                                <li><a href="#">Typography</a></li>
                                <li><a href="#">Buttons</a></li>
                                <li><a href="#">Dividers</a></li>
                                <li><a href="#">Columns</a></li>
                                <li><a href="#">Icon box</a></li>
                                <li><a href="#">Notifications</a></li>
                                <li><a href="#">Progress bars and Skill meter</a></li>
                                <li><a href="#">Tabs</a></li>
                                <li><a href="#">Testimonial</a></li>
                                <li><a href="#">Video</a></li>
                                <li><a href="#">Social icons</a></li>
                                <li><a href="#">Carousel sliders</a></li>
                                <li><a href="#">Custom List</a></li>
                                <li><a href="#">Image frames &amp; gallery</a></li>
                                <li><a href="#">Google Maps</a></li>
                                <li><a href="#">Accordion and Toggles</a></li>
                                <li className="is-active"><a href="#">Custom callout box</a></li>
                                <li><a href="#">Page section</a></li>
                                <li><a href="#">Mini callout box</a></li>
                                <li><a href="#">Content box</a></li>
                                <li><a href="#">Computer sliders</a></li>
                                <li><Link to="/pricing">Pricing &amp; Data tables</Link></li>
                                <li><a href="#">Process Builders</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-9">
                            <div className="beta-products-list">
                                <h4>New Products</h4>
                                <div className="beta-products-details">
                                    <p className="pull-left">438 styles found</p>
                                    <div className="clearfix"></div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="single-item">
                                            <div className="single-item-header">
                                                <Link to="/product"><img src="./asset/images/products/1.jpg"
                                                                            alt=""/></Link>
                                            </div>
                                            <div className="single-item-body">
                                                <p className="single-item-title">Sample Woman Top</p>
                                                <p className="single-item-price">
                                                    <span>$34.55</span>
                                                </p>
                                            </div>
                                            <div className="single-item-caption">
                                                <a className="add-to-cart pull-left" href="shopping_cart.html"><i
                                                    className="fa fa-shopping-cart"></i></a>
                                                <a className="beta-btn primary" href="product.html">Details <i
                                                    className="fa fa-chevron-right"></i></a>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="single-item">
                                            <div className="single-item-header">
                                                <Link to="/product"><img src="./asset/images/products/1.jpg"
                                                                            alt=""/></Link>
                                            </div>
                                            <div className="single-item-body">
                                                <p className="single-item-title">Sample Woman Top</p>
                                                <p className="single-item-price">
                                                    <span>$34.55</span>
                                                </p>
                                            </div>
                                            <div className="single-item-caption">
                                                <a className="add-to-cart pull-left" href="shopping_cart.html"><i
                                                    className="fa fa-shopping-cart"></i></a>
                                                <a className="beta-btn primary" href="product.html">Details <i
                                                    className="fa fa-chevron-right"></i></a>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="single-item">
                                            <div className="single-item-header">
                                                <Link to="/product"><img src="./asset/images/products/1.jpg"
                                                                            alt=""/></Link>
                                            </div>
                                            <div className="single-item-body">
                                                <p className="single-item-title">Sample Woman Top</p>
                                                <p className="single-item-price">
                                                    <span>$34.55</span>
                                                </p>
                                            </div>
                                            <div className="single-item-caption">
                                                <a className="add-to-cart pull-left" href="shopping_cart.html"><i
                                                    className="fa fa-shopping-cart"></i></a>
                                                <a className="beta-btn primary" href="product.html">Details <i
                                                    className="fa fa-chevron-right"></i></a>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space50">&nbsp;</div>

                            <div className="beta-products-list">
                                <h4>Top Products</h4>
                                <div className="beta-products-details">
                                    <p className="pull-left">438  s found</p>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="single-item">
                                            <div className="single-item-header">
                                                <Link to="/product"><img src="./asset/images/products/1.jpg"
                                                                            alt=""/></Link>
                                            </div>
                                            <div className="single-item-body">
                                                <p className="single-item-title">Sample Woman Top</p>
                                                <p className="single-item-price">
                                                    <span>$34.55</span>
                                                </p>
                                            </div>
                                            <div className="single-item-caption">
                                                <Link className="add-to-cart pull-left" to="/cart"><i
                                                    className="fa fa-shopping-cart"></i></Link>
                                                <a className="beta-btn primary" href="product.html">Details <i
                                                    className="fa fa-chevron-right"></i></a>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="single-item">
                                            <div className="single-item-header">
                                                <a href="product.html"><img src="./asset/images/products/1.jpg"
                                                                            alt=""/></a>
                                            </div>
                                            <div className="single-item-body">
                                                <p className="single-item-title">Sample Woman Top</p>
                                                <p className="single-item-price">
                                                    <span>$34.55</span>
                                                </p>
                                            </div>
                                            <div className="single-item-caption">
                                                <Link className="add-to-cart pull-left" to="/cart"><i
                                                    className="fa fa-shopping-cart"></i></Link>
                                                <a className="beta-btn primary" href="product.html">Details <i
                                                    className="fa fa-chevron-right"></i></a>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="single-item">
                                            <div className="single-item-header">
                                                <a href="product.html"><img src="./asset/images/products/1.jpg"
                                                                            alt=""/></a>
                                            </div>
                                            <div className="single-item-body">
                                                <p className="single-item-title">Sample Woman Top</p>
                                                <p className="single-item-price">
                                                    <span>$34.55</span>
                                                </p>
                                            </div>
                                            <div className="single-item-caption">
                                                <Link className="add-to-cart pull-left" to="/cart"><i
                                                    className="fa fa-shopping-cart"></i></Link>
                                                <a className="beta-btn primary" href="product.html">Details <i
                                                    className="fa fa-chevron-right"></i></a>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space40">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
        <Copyright />
    </>;
};

export default ProductType;
