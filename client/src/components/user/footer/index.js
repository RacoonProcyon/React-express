import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'black', paddingTop: "40px", paddingBottom: "20px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <p className="text-light text-muted font-weight-bold">COMPANY</p>
                            <p> <Link to="/" className="text-light font-italic text-muted" >About us</Link></p>
                            <p><Link to="/" className="text-light font-italic text-muted" >TeamTeam</Link></p>
                            <p> <Link to="/" className="text-light font-italic text-muted" >Carriers</Link></p>
                            <p><Link to="/" className="text-light font-italic text-muted" >Foodie Blog</Link></p>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <p className="text-light text-muted font-weight-bold">CONTACT</p>
                            <p><Link to="/" className="text-light font-italic text-muted" >Help & Support</Link></p>
                            <p><Link to="/" className="text-light font-italic text-muted" >Partner with us</Link></p>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <p className="text-light text-muted font-weight-bold">LEGAL</p>
                            <p> <Link to="/" className="text-light font-italic text-muted" >Refund & Cancellation</Link></p>
                            <p><Link to="/" className="text-light font-italic text-muted" >Privacy Policy</Link></p>
                            <p><Link to="/" className="text-light font-italic text-muted" >Offer Terms</Link></p>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                                <img src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png" style={{ width: '100%' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}