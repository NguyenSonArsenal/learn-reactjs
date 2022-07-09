import React, {useEffect, useState} from 'react';

import { useCookies } from 'react-cookie';

const TrendingProduct = (product) => {

    const [cookies, setCookie] = useCookies(['cart']);
    const [data, setData] = useState();

    function addCart(id) {
        console.log(cookies, '//xxx');
        setCookie('cart', [123, 456], { path: '/' });
    }

    useEffect(() => {
        fetch('http://localhost:3002/product')
            .then((res) => res.json())
            .then((result) => {
                if (result.length > 0) {
                    setData(result);
                }
            });
    }, []);


    console.log(data, '//data')


    return <>
        <section className="h-t-products1 section-t-padding section-b-padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section-title">
                            <h2>Trending products</h2>
                        </div>

                        { data &&
                        <div className="trending-products owl-carousel owl-theme">
                            {
                                data?.map((item, index) => {
                                    return <div className="items">
                                        <div className="tred-pro">
                                            <div className="tr-pro-img">
                                                <a href="product.html">
                                                    <img className="img-fluid" src="/asset/image/pro/pro-img-1.jpg" alt="pro-img1" />
                                                    <img className="img-fluid additional-image"
                                                         src="/asset/image/pro/pro-img-01.jpg"
                                                         alt="additional image" />
                                                </a>
                                            </div>
                                            <div className="Pro-lable">
                                                <span className="p-text">New</span>
                                            </div>
                                            <div className="pro-icn">
                                                <a href="wishlist.html" className="w-c-q-icn"><i
                                                    className="fa fa-heart"></i></a>
                                                <a href="#" onClick={() => addCart(1)} className="w-c-q-icn"><i className="fa fa-shopping-bag"></i></a>
                                                <a href="javascript:void(0)" className="w-c-q-icn" data-bs-toggle="modal"
                                                   data-bs-target="#exampleModal"><i className="fa fa-eye"></i></a>
                                            </div>
                                        </div>
                                        <div className="caption">
                                            <h3><a href="product.html">Fresh organic fruit (50gm)</a></h3>
                                            <div className="rating">
                                                <i className="fa fa-star c-star"></i>
                                                <i className="fa fa-star c-star"></i>
                                                <i className="fa fa-star c-star"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="pro-price">
                                                <span className="new-price">$130.00 USD</span>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        }

                    </div>
                </div>
            </div>
        </section>
    </>;
};

export default TrendingProduct;
