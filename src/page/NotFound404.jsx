import React from 'react';
import Header from "../component/layout/header/header";
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";

const NotFound404 = () => {
    return <>
        <Header />

        <section className="bg-gray">
            <div className="inner-header">
                <div className="container">
                    <div className="pull-left">
                        <h6 className="inner-title">Page Not Found</h6>
                    </div>
                    <div className="pull-right">
                        <div className="beta-breadcrumb font-large">
                            <a href="#">Pages</a> / <span>Page 404</span>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

            <div className="container">
                <div id="content" className="space-top-none space-bottom-none">
                    <div className="abs-fullwidth bg-gray">
                        <div className="space100">&nbsp;</div>
                        <div className="space80">&nbsp;</div>
                        <div className="container text-center">
                            <h2>Oops! That Page Can’t Be Found!</h2>
                            <div className="space40">&nbsp;</div>
                            <img src="./asset/images/404.jpg" alt=""/>
                            <div className="space30">&nbsp;</div>
                            <p>It looks like nothing was found at this location. Maybe try to use a search?</p>
                            <form role="search" method="get" id="searchform" action="/">
                                <input type="text" value="" name="s" id="s" placeholder="Search entire store here..."/>
                                <button className="fa fa-search" type="submit" id="searchsubmit"></button>
                            </form>
                        </div>
                        <div className="space100">&nbsp;</div>
                        <div className="space30">&nbsp;</div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
        <Copyright />
    </>;
};

export default NotFound404;
