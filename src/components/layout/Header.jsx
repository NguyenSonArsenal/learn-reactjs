import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Header = () => {
	
	const [inputSearch, setInputSearch] = useState('');
	
	return <>
		<div id="header">
			<div className="header-top">
				<div className="container">
					<div className="pull-left auto-width-left">
						<ul className="top-menu menu-beta l-inline">
							<li><a href=""><i className="fa fa-home"></i> 90-92 Lê Thị Riêng, Bến Thành, Quận 1</a></li>
							<li><a href=""><i className="fa fa-phone"></i> 0163 296 7751</a></li>
						</ul>
					</div>
					<div className="pull-right auto-width-right">
						<ul className="top-details menu-beta l-inline">
							<li><a href="#"><i className="fa fa-user"></i>Tài khoản</a></li>
							<li><Link to="/register">Đăng kí</Link></li>
							<li><Link to="/login">Đăng nhập</Link></li>
						</ul>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
			<div className="header-body">
				<div className="container beta-relative">
					<div className="pull-left">
						<Link to="/" id="logo"><img src="/asset/images/logo-cake.png" width="200px" alt=""/></Link>
					</div>
					<div className="pull-right beta-components space-left ov">
						<div className="space10">&nbsp;</div>
						<div className="beta-comp">
							<form role="search" method="get" id="searchform" action="/">
								<input type="text"
                       value={inputSearch}
                       placeholder="Nhập từ khóa..."
											 onChange={e => setInputSearch(e.target.value)}/>
								<button className="fa fa-search" type="submit" id="searchsubmit"></button>
							</form>
						</div>
						
						<div className="beta-comp">
							<div className="cart">
								<div className="beta-select"><i className="fa fa-shopping-cart"></i> Giỏ hàng (Trống) <i
									className="fa fa-chevron-down"></i></div>
								<div className="beta-dropdown cart-body">
									<div className="cart-item">
										<div className="media">
											<a className="pull-left" href="#"><img
												src="/asset/images/products/cart/1.png" alt=""/></a>
											<div className="media-body">
												<span className="cart-item-title">Sample Woman Top</span>
												<span className="cart-item-options">Size: XS; Colar: Navy</span>
												<span className="cart-item-amount">1*<span>$49.50</span></span>
											</div>
										</div>
									</div>
									
									<div className="cart-item">
										<div className="media">
											<a className="pull-left" href="#"><img
												src="/asset/images/products/cart/2.png" alt=""/></a>
											<div className="media-body">
												<span className="cart-item-title">Sample Woman Top</span>
												<span className="cart-item-options">Size: XS; Colar: Navy</span>
												<span className="cart-item-amount">1*<span>$49.50</span></span>
											</div>
										</div>
									</div>
									
									<div className="cart-item">
										<div className="media">
											<a className="pull-left" href="#"><img
												src="/asset/images/products/cart/3.png" alt=""/></a>
											<div className="media-body">
												<span className="cart-item-title">Sample Woman Top</span>
												<span className="cart-item-options">Size: XS; Colar: Navy</span>
												<span className="cart-item-amount">1*<span>$49.50</span></span>
											</div>
										</div>
									</div>
									
									<div className="cart-caption">
										<div className="cart-total text-right">Tổng tiền: <span
											className="cart-total-value">$34.55</span></div>
										<div className="clearfix"></div>
										
										<div className="center">
											<div className="space10">&nbsp;</div>
											<Link to="/checkout" className="beta-btn primary text-center">Đặt hàng <i
												className="fa fa-chevron-right"></i></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
			<div className="header-bottom" style={{backgroundColor: "#0277b8"}}>
				<div className="container">
					<a className="visible-xs beta-menu-toggle pull-right" href="#"><span
						className='beta-menu-toggle-text'>Menu</span> <i className="fa fa-bars"></i></a>
					<div className="visible-xs clearfix"></div>
					<nav className="main-menu">
						<ul className="l-inline ov">
							<li><Link to="/">Trang chủ</Link></li>
							<li><Link to="/product">Sản phẩm</Link>
								<ul className="sub-menu">
									<li><Link to="/product_type">Sản phẩm 1</Link></li>
									<li><Link to="/product_type">Sản phẩm 2</Link></li>
									<li><Link to="/product_type">Sản phẩm 4</Link></li>
								</ul>
							</li>
							<li><Link to="/about">Giới thiệu</Link></li>
							<li><Link to="/contact">Liên hệ</Link></li>
							<li><Link to="/pricing">Giá cả</Link></li>
						</ul>
						<div className="clearfix"></div>
					</nav>
				</div>
			</div>
		</div>
	</>;
};

export default Header;
