import React from 'react';

export default function Topheader(){
    return(
        <div className="container-fluid">
        <div className="row" style={{padding:'20px'}}>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <p className="text-light" style={{fontWeight:'700',fontSize:'30px'}}>Auth Name</p>
                <span className="text-light">9868687678</span><br/>
                <span className="text-light"> Auth@gmail.com</span>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <button type="button" className="btn btn-secondary btnedit" style={{float:'right'}}>Edit Profile</button>
            </div>
        </div>
    </div>
    )
}