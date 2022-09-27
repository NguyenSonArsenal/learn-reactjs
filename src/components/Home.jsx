import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
	return <>
		<div className="container">
			<div id="content" className="space-top-none">
				<div className="main-content">
					<div className="space60">&nbsp;</div>
					<div className="row">
						<div className="col-sm-12">
							<div className="beta-products-list">
								<h4>New Products</h4>
								<div className="beta-products-details">
									<p className="pull-left">438 styles found</p>
									<div className="clearfix"></div>
								</div>
								
								<div className="row">
									<div className="col-sm-3">
										<div className="single-item">
											<div className="single-item-header">
												<Link to="/product"><img src="./asset/images/products/1.jpg" alt=""/></Link>
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
												<Link className="beta-btn primary" to="/product">Details <i
													className="fa fa-chevron-right"></i></Link>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<div className="col-sm-3">
										<div className="single-item">
											<div className="ribbon-wrapper">
												<div className="ribbon sale">Sale</div>
											</div>
											
											<div className="single-item-header">
												<Link to="/product"><img src="./asset/images/products/2.jpg"
																								 alt=""/></Link>
											</div>
											<div className="single-item-body">
												<p className="single-item-title">Sample Woman Top</p>
												<p className="single-item-price">
													<span className="flash-del">$34.55</span>
													<span className="flash-sale">$33.55</span>
												</p>
											</div>
											<div className="single-item-caption">
												<Link className="add-to-cart pull-left" to="/cart"><i
													className="fa fa-shopping-cart"></i></Link>
												<Link className="beta-btn primary" to="/product">Details <i
													className="fa fa-chevron-right"></i></Link>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<div className="col-sm-3">
										<div className="single-item">
											<div className="single-item-header">
												<Link to="/product"><img src="./asset/images/products/3.jpg"
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
												<Link className="beta-btn primary" to="/product">Details <i
													className="fa fa-chevron-right"></i></Link>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<div className="col-sm-3">
										<div className="single-item">
											<div className="single-item-header">
												<Link to="/product"><img src="./asset/images/products/3.jpg"
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
												<Link className="beta-btn primary" to="/product">Details <i
													className="fa fa-chevron-right"></i></Link>
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
									<p className="pull-left">438 styles found</p>
									<div className="clearfix"></div>
								</div>
								<div className="row">
									<div className="col-sm-3">
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
												<Link className="beta-btn primary" to="/product">Details <i
													className="fa fa-chevron-right"></i></Link>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<div className="col-sm-3">
										<div className="single-item">
											<div className="ribbon-wrapper">
												<div className="ribbon sale">Sale</div>
											</div>
											
											<div className="single-item-header">
												<Link to="/product"><img src="./asset/images/products/2.jpg"
																								 alt=""/></Link>
											</div>
											<div className="single-item-body">
												<p className="single-item-title">Sample Woman Top</p>
												<p className="single-item-price">
													<span className="flash-del">$34.55</span>
													<span className="flash-sale">$33.55</span>
												</p>
											</div>
											<div className="single-item-caption">
												<Link className="add-to-cart pull-left" to="/cart"><i
													className="fa fa-shopping-cart"></i></Link>
												<Link className="beta-btn primary" to="/product">Details <i
													className="fa fa-chevron-right"></i></Link>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<div className="col-sm-3">
										<div className="single-item">
											<div className="single-item-header">
												<a href="product.html"><img src="./asset/images/products/3.jpg"
																										alt=""/></a>
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
									<div className="col-sm-3">
										<div className="single-item">
											<div className="single-item-header">
												<a href="product.html"><img src="./asset/images/products/3.jpg"
																										alt=""/></a>
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
								<div className="space40">&nbsp;</div>
								<div className="row">
									<div className="col-sm-3">
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
												<a className="add-to-cart pull-left" href="shopping_cart.html"><i
													className="fa fa-shopping-cart"></i></a>
												<a className="beta-btn primary" href="product.html">Details <i
													className="fa fa-chevron-right"></i></a>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
									<div className="col-sm-3">
										<div className="single-item">
											<div className="ribbon-wrapper">
												<div className="ribbon sale">Sale</div>
											</div>
											
											<div className="single-item-header">
												<a href="product.html"><img src="./asset/images/products/2.jpg"
																										alt=""/></a>
											</div>
											<div className="single-item-body">
												<p className="single-item-title">Sample Woman Top</p>
												<p className="single-item-price">
													<span className="flash-del">$34.55</span>
													<span className="flash-sale">$33.55</span>
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
									<div className="col-sm-3">
										<div className="single-item">
											<div className="single-item-header">
												<a href="product.html"><img src="./asset/images/products/3.jpg"
																										alt=""/></a>
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
									<div className="col-sm-3">
										<div className="single-item">
											<div className="single-item-header">
												<a href="product.html"><img src="./asset/images/products/3.jpg"
																										alt=""/></a>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	</>;
};

export default Home;