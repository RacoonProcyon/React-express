import React, { Component } from 'react';
import './index.css'
export default class Restaurant extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#f8f9fa' }}>
                <div style={{ backgroundColor: 'black' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" style={{ padding: '20px' }}>
                                <img src='https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg' style={{ width: "100%" }} alt="" />
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" style={{ padding: '20px' }}>
                                <div>
                                    <p className="text-light" style={{ fontWeight: '400', fontSize: "30px" }}>Firdhouse</p>
                                    <small className="text-light text-muted">Triplicane, Chennai, Tamil Nadu, <br /> India Firdhouse</small> <br />
                                    <div className="row">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                            <div>
                                                <br />
                                                <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/rating-star-icon-18-256.png" style={{ width: "12%" }} alt="" />
                                                <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/rating-star-icon-18-256.png" style={{ width: "12%" }} alt="" />
                                                <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/rating-star-icon-18-256.png" style={{ width: "12%" }} alt="" />
                                                <br />
                                                <small className="text-muted" >  Rating</small>
                                            </div>
                                        </div>
                                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                                            <div>
                                                <br />
                                                <span className="text-light font-weight-bold" >30 Min</span><br />
                                                <small className="text-muted">Delivery Time</small>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                                            <div className="col-auto">
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text" style={{ backgroundColor: "#ffffff", border: "thick", height: '36px' }}>
                                                            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search for dishes" style={{ border: 'none' }} />
                                                            <img src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="" style={{ width: '12%' }} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5" >
                                            <div style={{ backgroundColor: 'white',paddingBottom: "1px",paddingTop: "1px",padding:'3px'}}>
                                                <div className="custom-control custom-checkbox my-1 mr-sm-2" >
                                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                    <label className="custom-control-label" for="customControlInline">Veg only</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                <div className="offerBox">
                                    <img src="https://www.ancol.com/assets/frontend/images/promo_icon_white.png" alt="" style={{width:'25%'}} />
                                    <span className="text-light" style={{fontWeight:'400',fontSize:'25px'}}> Offers </span><br/><small  className="text-muted">Get 10 % off on Minimum Amount $100.00</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}