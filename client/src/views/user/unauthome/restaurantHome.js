import React, { Component } from 'react';
import Restaurant from '../../../components/user/unauthorize/restaurant';
import Header from '../../../components/user/unauthorize/header';
import Menu from '../../../components/user/unauthorize/menu';

export default class RestaurantHome extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#f8f9fa' }}>
                <div style={{ backgroundColor: 'black' }} className="alert alert-warning alert-dismissible fade show" role="alert">
                    <small className="text-light">This is the product of AppDupe ( from Tranxit Technologies Solutions ) Please do not purchase This Product from any fraudulent sources. For any assistance, please contact info@appdupe.com</small>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span className="text-light" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <Header/>
                <Restaurant />
                <Menu />
            </div>
        )
    }
}