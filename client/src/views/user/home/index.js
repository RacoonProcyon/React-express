import React, { Component } from 'react';
import food from '../../../_Assets/Foods_(cropped) (1).jpg';
import logo from '../../../_Assets/332-3324201_gofood-logo-png-logo-go-food-vector.png';
import './index.css';
import Footer from '../../../components/user/footer';
import Login from '../../../components/user/login';
import Signup from '../../../components/user/signup';
import { Link,Redirect } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            heading: '',
            sideBar: '',
            place: null
        }
    }
    render() {
        return (
            <div>
                <Login history={this.props.history} />
                <Signup history={this.props.history} />
                <div className="container-fluid" style={{ backgroundColor: "#f8f9fa" }}>
                    <div style={{ backgroundColor: 'black' }} className="alert alert-warning alert-dismissible fade show" role="alert">
                        <small className="text-light">This is the product of AppDupe ( from Tranxit Technologies Solutions ) Please do not purchase This Product from any fraudulent sources. For any assistance, please contact info@appdupe.com</small>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span className="text-light" aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 authbox">
                            {this.props.getGoogle && this.props.getGoogle.success === true ? <div class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Login success full</strong>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div> : null}
                            <div className="row">
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                                    <div className="logo">
                                        <img src={logo} style={{ width: "50%" }} alt="" />
                                    </div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div>
                                            <button type="button" className="btn btn-light btnLogin" data-toggle="modal" data-target="#exampleModalCenter" >Login</button>
                                            <button type="button" className="btn btn-dark btn-lg btnsignup" data-toggle="modal" data-target="#exampleModalCenter1">Signup</button>
                                        </div>
                                </div>
                            </div>
                            <div className='authbox2' style={{ padding: "40px", paddingTop: "70px", paddingBottom: "70px" }}>
                                <h1 className="text-muted">{this.state.heading}</h1>
                                <p className="text-muted">Order food from favourite restaurants near you.</p>
                                <div className="input-group" style={{ paddingTop: "40px" }}>
                                    <input type="text" className="form-control" placeholder="Enter Your Delivery Location" style={{ paddingBottom: "15px", paddingTop: "15px" }} />
                                    <div className="input-group-prepend locatebtn">
                                        <Link to="/restaurants" type="button" id="inputGroupPrepend2" className="btn btn-dark input-group-text" style={{ border: "thick" }}>Locate me</Link>
                                    </div>
                                    <div className="input-group-prepend">
                                        <button type="button" id="inputGroupPrepend2" className="btn btn-dark input-group-text" style={{ backgroundColor: "#f7a30a", border: "thick" }}>Find Food</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                            <div>
                                <img src={food} style={{ width: "100%" }} alt="" />
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#1d1b1bd1' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" style={{ paddingTop: '40px', paddingBottom: "40px" }}>
                                    <img style={{ width: "20%" }} src="https://foodie.deliveryventure.com/assets/user/img/feature-1.png" alt="" />
                                    <p style={{ fontSize: '20px', fontWeight: '700' }} className="text-light">No Minimum Order</p>
                                    <small className="text-light text-muted">Order in for yourself or for the group, with no restrictions on order value</small>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" style={{ paddingTop: '40px', paddingBottom: "40px" }}>
                                    <img style={{ width: "20%" }} src="https://foodie.deliveryventure.com/assets/user/img/feature-2.png" alt="" />
                                    <p style={{ fontSize: '20px', fontWeight: '700' }} className="text-light">Live Order Tracking</p>
                                    <small className="text-light text-muted">Know where your order is at all times, from the restaurant to your doorstep</small>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" style={{ paddingTop: '40px', paddingBottom: "40px" }}>
                                    <img style={{ width: "20%" }} src="https://foodie.deliveryventure.com/assets/user/img/feature-3.png" alt="" />
                                    <p style={{ fontSize: '20px', fontWeight: '700' }} className="text-light">Lightning-Fast Delivery</p>
                                    <small className="text-light text-muted">Experience Foodie's superfast delivery for food delivered fresh & on time</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" style={{ paddingTop: '40px', paddingBottom: "40px" }}>
                                <br />
                                <br />
                                <br />
                                <div>
                                    <p style={{ fontWeight: '700', fontSize: '40px' }}>Restaurants in your pocket</p>
                                    <p className="text-muted" style={{ fontWeight: '700', fontSize: '20px' }}>Order from your favorite restaurants & track on the go, with the all-new Foodie app.</p>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" style={{ paddingTop: '40px', paddingBottom: "40px" }}>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <img src="https://foodie.deliveryventure.com/assets/user/img/app-screen-1.png" alt="" style={{ width: "100%" }} />
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <img src="https://foodie.deliveryventure.com/assets/user/img/app-screen-2.png" alt="" style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space">
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default Home