import React from 'react';
import {Link} from "react-router-dom";

const Product = () => {
	return <>
		<div className="inner-header">
			<div className="container">
				<div className="pull-left">
					<h6 className="inner-title">Product</h6>
				</div>
				<div className="pull-right">
					<div className="beta-breadcrumb font-large">
						<Link to="/">Home</Link> / <span>Product</span>
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
		</div>
		
		<div className="container">
			<div id="content">
				<div className="row">
					<div className="col-sm-9">
						
						<div className="row">
							<div className="col-sm-4">
								<img src="./asset/images/products/6.jpg" alt=""/>
							</div>
							<div className="col-sm-8">
								<div className="single-item-body">
									<p className="single-item-title">Sample Woman Top</p>
									<p className="single-item-price">
										<span>$34.55</span>
									</p>
								</div>
								
								<div className="clearfix"></div>
								<div className="space20">&nbsp;</div>
								
								<div className="single-item-desc">
									<p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
										ms id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis
										dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
										necessitatibus saepe.</p>
								</div>
								<div className="space20">&nbsp;</div>
								
								<p>Options:</p>
								<div className="single-item-options">
									<select className="wc-select" name="size">
										<option>Size</option>
										<option value="XS">XS</option>
										<option value="S">S</option>
										<option value="M">M</option>
										<option value="L">L</option>
										<option value="XL">XL</option>
									</select>
									<select className="wc-select" name="color">
										<option>Color</option>
										<option value="Red">Red</option>
										<option value="Green">Green</option>
										<option value="Yellow">Yellow</option>
										<option value="Black">Black</option>
										<option value="White">White</option>
									</select>
									<select className="wc-select" name="color">
										<option>Qty</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
									<a className="add-to-cart" href="#"><i className="fa fa-shopping-cart"></i></a>
									<div className="clearfix"></div>
								</div>
							</div>
						</div>
						
						<div className="space40">&nbsp;</div>
						<div className="woocommerce-tabs">
							<ul className="tabs">
								<li><a href="#tab-description">Description</a></li>
								<li><a href="#tab-reviews">Reviews (0)</a></li>
							</ul>
							
							<div className="panel" id="tab-description">
								<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
									consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
									quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
								<p>Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
									labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
									nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
									commodi consequaturuis autem vel eum iure reprehenderit qui in ea voluptate velit es
									quam nihil molestiae consequr, vel illum qui dolorem eum fugiat quo voluptas nulla
									pariatur? </p>
							</div>
							<div className="panel" id="tab-reviews">
								<p>No Reviews</p>
							</div>
						</div>
						<div className="space50">&nbsp;</div>
						<div className="beta-products-list">
							<h4>Related Products</h4>
							
							<div className="row">
								<div className="col-sm-4">
									<div className="single-item">
										<div className="single-item-header">
											<a href="product.html"><img src="./asset/images/products/4.jpg" alt=""/></a>
										</div>
										<div className="single-item-body">
											<p className="single-item-title">Sample Woman Top</p>
											<p className="single-item-price">
												<span>$34.55</span>
											</p>
										</div>
										<div className="single-item-caption">
											<a className="add-to-cart pull-left" href="product.html"><i
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
											<a href="product.html"><img src="./asset/images/products/5.jpg" alt=""/></a>
										</div>
										<div className="single-item-body">
											<p className="single-item-title">Sample Woman Top</p>
											<p className="single-item-price">
												<span>$34.55</span>
											</p>
										</div>
										<div className="single-item-caption">
											<a className="add-to-cart pull-left" href="product.html"><i
												className="fa fa-shopping-cart"></i></a>
											<a className="beta-btn primary" href="product.html">Details <i
												className="fa fa-chevron-right"></i></a>
											<div className="clearfix"></div>
										</div>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="single-item">
										<div className="ribbon-wrapper">
											<div className="ribbon sale">Sale</div>
										</div>
										
										<div className="single-item-header">
											<a href="#"><img src="./asset/images/products/6.jpg" alt=""/></a>
										</div>
										<div className="single-item-body">
											<p className="single-item-title">Sample Woman Top</p>
											<p className="single-item-price">
												<span className="flash-del">$34.55</span>
												<span className="flash-sale">$33.55</span>
											</p>
										</div>
										<div className="single-item-caption">
											<a className="add-to-cart pull-left" href="#"><i
												className="fa fa-shopping-cart"></i></a>
											<a className="beta-btn primary" href="#">Details <i
												className="fa fa-chevron-right"></i></a>
											<div className="clearfix"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-3 aside">
						<div className="widget">
							<h3 className="widget-title">Best Sellers</h3>
							<div className="widget-body">
								<div className="beta-sales beta-lists">
									<div className="media beta-sales-item">
										<a className="pull-left" href="product.html"><img
											src="./asset/images/products/sales/1.png" alt=""/></a>
										<div className="media-body">
											Sample Woman Top
											<span className="beta-sales-price">$34.55</span>
										</div>
									</div>
									<div className="media beta-sales-item">
										<a className="pull-left" href="product.html"><img
											src="./asset/images/products/sales/2.png" alt=""/></a>
										<div className="media-body">
											Sample Woman Top
											<span className="beta-sales-price">$34.55</span>
										</div>
									</div>
									<div className="media beta-sales-item">
										<a className="pull-left" href="product.html"><img
											src="./asset/images/products/sales/3.png" alt=""/></a>
										<div className="media-body">
											Sample Woman Top
											<span className="beta-sales-price">$34.55</span>
										</div>
									</div>
									<div className="media beta-sales-item">
										<a className="pull-left" href="product.html"><img
											src="./asset/images/products/sales/4.png" alt=""/></a>
										<div className="media-body">
											Sample Woman Top
											<span className="beta-sales-price">$34.55</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="widget">
							<h3 className="widget-title">New Products</h3>
							<div className="widget-body">
								<div className="beta-sales beta-lists">
									<div className="media beta-sales-item">
										<a className="pull-left" href="product.html"><img
											src="./asset/images/products/sales/1.png" alt=""/></a>
										<div className="media-body">
											Sample Woman Top
											<span className="beta-sales-price">$34.55</span>
										</div>
									</div>
									<div className="media beta-sales-item">
										<a className="pull-left" href="product.html"><img
											src="./asset/images/products/sales/2.png" alt=""/></a>
										<div className="media-body">
											Sample Woman Top
											<span className="beta-sales-price">$34.55</span>
										</div>
									</div>
									<div className="media beta-sales-item">
										<a className="pull-left" href="product.html"><img
											src="./asset/images/products/sales/3.png" alt=""/></a>
										<div className="media-body">
											Sample Woman Top
											<span className="beta-sales-price">$34.55</span>
										</div>
									</div>
									<div className="media beta-sales-item">
										<a className="pull-left" href="product.html"><img
											src="./asset/images/products/sales/4.png" alt=""/></a>
										<div className="media-body">
											Sample Woman Top
											<span className="beta-sales-price">$34.55</span>
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

export default Product;
