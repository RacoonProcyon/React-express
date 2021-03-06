import React, { Component } from 'react';
import Header from '../unauthorize/header';
import Footer from '../footer';
import './index.css';
import LeftSide from './leftSide';
import Topheader from './authHeader';

export default class Address extends Component {
    render() {
        return (
            <div>
                <Header />
                <div style={{ backgroundColor: 'rgba(44, 132, 162, 1)', paddingTop: '40px', paddingBottom: '30px', }}>
                    <Topheader />
                    <div className="container-fluid" style={{ padding: "2pc" }} >
                        <div className="row rowBox" style={{ backgroundColor: '#ffffff' }}>
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <LeftSide />
                            </div>
                            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                <br />
                                <div>
                                    <h4 className="font-weight-bold">Address</h4>
                                    <br />
                                    <button class="card" style={{width: "18rem",margin:'auto'}}>
                                        <div class="card-body">
                                            <h5 class="card-title" style={{padding:'30px'}}>Add New Address</h5>
                                            <button type="button" class="btn btn-outline-success">Add New</button>
                                        </div>
                                    </button>
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