import React, { Component } from 'react';
import './index.css'
import { Link } from 'react-router-dom';
export default class Dishes extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div id="list-example" className="list-group scroll" style={{}}>
                                <a style={{ backgroundColor: "#f8f9fa", border: 'thick' }} className=" sideScroll list-group-item list-group-item-action" href="#list-item-1">Popular<br /><small>3 Options</small></a>
                                <a style={{ backgroundColor: "#f8f9fa", border: 'thick' }} className=" sideScroll list-group-item list-group-item-action" href="#list-item-2">Super Fast Delivery <br /><small>6 Options</small></a>
                                <a style={{ backgroundColor: "#f8f9fa", border: 'thick' }} className=" sideScroll list-group-item list-group-item-action" href="#list-item-3">Offers Around you <br /><small>5 Options</small></a>
                                <a style={{ backgroundColor: "#f8f9fa", border: 'thick' }} className=" sideScroll list-group-item list-group-item-action" href="#list-item-4">Vegetarian Options <br /> <small>0 Options</small></a>
                                <a style={{ backgroundColor: "#f8f9fa", border: 'thick' }} className=" sideScroll list-group-item list-group-item-action" href="#list-item-5">What's New <br /><small>0 Options</small></a>
                                <a style={{ backgroundColor: "#f8f9fa", border: 'thick' }} className=" sideScroll list-group-item list-group-item-action" href="#list-item-6">See All <br /> <small>6 Options</small></a>
                            </div>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 dishesScroll" >
                            <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
                                <h4 id="list-item-1" style={{ marginBottom: '30px', marginTop: '30px' }}>Popular</h4>
                                <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4 id="list-item-2" style={{ marginBottom: '30px', marginTop: '30px' }}>Super Fast Delivery</h4>
                                <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <h4 id="list-item-3" style={{ marginBottom: '30px', marginTop: '30px' }}>Offers Around you</h4>
                                <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4 id="list-item-4" style={{ marginBottom: '30px', marginTop: '30px' }}>Vegetarian Options</h4>
                                <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4 id="list-item-5" style={{ marginBottom: '30px', marginTop: '30px' }}> What's New</h4>
                                <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <Link to="restaurant" className="linkSet">
                                        <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                            <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                            <div className="card-body">
                                                <h5 className="card-title">FirDhouse</h5>
                                                <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                <br />
                                                <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <h4 id="list-item-6" style={{ marginBottom: '30px', marginTop: '30px' }}>See All</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#f9b743', paddingBottom: '50px', paddingTop: '60px' }}>
                    <p className="text-light text-center" style={{ fontSize: '40px', fontWeight: '700', paddingBottom: '30px' }}> ALL RESTAURANT</p>
                    <div className="container" style={{ backgroundColor: '#f8f9fa', paddingTop: "20px" }}>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <p style={{ fontSize: '30px', fontWeight: '700' }}><a href="#list-item-1"><img src="https://www.kindpng.com/picc/m/281-2812330_up-arrow-svg-thick-up-arrow-hd-png.png" alt="" style={{ width: '7%' }} /> </a> 6 Restaurants</p>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <nav className="nav justify-content-end">
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link text-warning active" id="nav-Relevance-tab" data-toggle="tab" href="#nav-Relevance" role="tab" aria-controls="nav-Relevance" aria-selected="true">Relevance</a>
                                        <a className="nav-item nav-link text-warning" id="nav-Delivery-tab" data-toggle="tab" href="#nav-Delivery" role="tab" aria-controls="nav-Delivery" aria-selected="false">Delivery Time</a>
                                        <a className="nav-item nav-link text-warning" id="nav-Rating-tab" data-toggle="tab" href="#nav-Rating" role="tab" aria-controls="nav-Rating" aria-selected="false">Rating</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-Relevance" role="tabpanel" aria-labelledby="nav-Relevance-tab">
                                <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-Delivery" role="tabpanel" aria-labelledby="nav-Delivery-tab">
                                <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-Rating" role="tabpanel" aria-labelledby="nav-Rating-tab">
                                <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="restaurant" className="linkSet">
                                            <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                                <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">FirDhouse</h5>
                                                    <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                                    <br />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                    <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <Link to="restaurant" className="linkSet">
                                    <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                        <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">FirDhouse</h5>
                                            <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                            <br />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                        </div>
                                    </div>
                                </Link>
                                <Link to="restaurant" className="linkSet">
                                    <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                        <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">FirDhouse</h5>
                                            <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                            <br />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <Link to="restaurant" className="linkSet">
                                    <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                        <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">FirDhouse</h5>
                                            <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                            <br />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                        </div>
                                    </div>
                                </Link>
                                <Link to="restaurant" className="linkSet">
                                    <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                        <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">FirDhouse</h5>
                                            <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                            <br />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <Link to="restaurant" className="linkSet">
                                    <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                        <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">FirDhouse</h5>
                                            <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                            <br />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                        </div>
                                    </div>
                                </Link>
                                <Link to="restaurant" className="linkSet">
                                    <div className="card scroll" style={{ width: "16rem", border: "thick", backgroundColor: "#f8f9fa", margin: 'auto' }}>
                                        <img className="card-img-top" src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">FirDhouse</h5>
                                            <small className="card-text">Quik Bites,South indian,chattinad..</small>
                                            <br />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                            <img src="https://img.icons8.com/material/480/star--v1.png" style={{ width: '10%' }} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}