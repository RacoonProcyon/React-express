import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Login extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Login</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body" >
                                    <div className="container">
                                        <div style={{ textAlign: 'center', paddingBottom: '20px' }}>
                                        <img src="https://pluspng.com/img-png/google-logo-png-open-2000.png" style={{width:'15%'}} alt="" />
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <span className="text-muted text-center">or</span>
                                        </div>
                                        <hr style={{ width: '50%' }} />
                                        <div className="input-group" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                                            <div className="input-group-prepend">
                                                <span id="inputGroupPrepend2" className="btn btn-light input-group-text" style={{ border: "thick" }}>@</span>
                                            </div>
                                            <input type="email" className="form-control" placeholder="Enter Email" style={{ paddingBottom: "15px", paddingTop: "15px" }} value="user@gmail.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                <button type="button" className="btn btn-light btnVeryfy" >Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login