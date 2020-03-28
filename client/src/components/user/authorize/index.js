import React, { Component } from 'react';
import Header from '../unauthorize/header';
import Footer from '../footer';
import './index.css';
import LeftSide from './leftSide';
import Topheader from './authHeader';

export default class Order extends Component {
    render() {
        return (
            <div>
                <Header />
                <div style={{ backgroundColor: 'rgba(44, 132, 162, 1)', paddingTop: '120px', paddingBottom: '30px', }}>
                <Topheader />
                    <div className="container-fluid" style={{ padding: "2pc" }} >
                        <div className="row rowBox" style={{ backgroundColor: '#ffffff' }}>
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <LeftSide />
                            </div>
                            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                <br />
                                <div>
                                    <h4 className="">Ongoing Orders</h4>
                                    <p className="text-muted ">No Order Found!</p>
                                </div>
                                <br />
                                <div>
                                    <h4 className="">Past OrdersPast Orders</h4>
                                    <p className="text-muted ">No Order Found!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}