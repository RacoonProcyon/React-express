import React, { Component } from 'react';
import './index.css'
export default class Menu extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div id="list-example" className="list-group" style={{ textAlign: 'right', borderRight: "groove", borderColor: "chartreuse" }}>
                                <a className="list-group-item list-group-item-action scrollmenu" href="#list-item-1" style={{ border: 'thick', backgroundColor: '#f8f9fa' }}>Recommended</a>
                                <a className="list-group-item list-group-item-action scrollmenu" href="#list-item-2" style={{ border: 'thick', backgroundColor: '#f8f9fa' }}>Burger</a>
                                <a className="list-group-item list-group-item-action scrollmenu" href="#list-item-3" style={{ border: 'thick', backgroundColor: '#f8f9fa' }}>Snacks</a>
                                <a className="list-group-item list-group-item-action scrollmenu" href="#list-item-4" style={{ border: 'thick', backgroundColor: '#f8f9fa' }}>Beverages</a>
                            </div>
                        </div>
                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 menuScroll " >
                            <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
                                <h4 id="list-item-1" className="text-muted" style={{ fontSize: '30px', fontWeight: '700', paddingTop: '20px', paddingBottom: '20px' }}>Recommended</h4>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <div className="card scroll" style={{ width: "18rem", backgroundColor: '#f8f9fa', margin: 'auto' }}>
                                            <img className="card-img-top" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/9/0/FNK_the-best-biryani_H.JPG.rend.hgtvcom.826.620.suffix/1568143107638.jpeg" alt="" />
                                            <div className="card-body">
                                                <h5 className="card-title">chicken briyani</h5>
                                                <small className="text-muted">Burger</small> <br /><br />
                                                <span className="text-muted font-weight-bold" >$100</span>
                                                <button type="button" className="btn btn-outline-success" style={{ float: 'right', paddingRight: "30px", paddingLeft: "30px" }}>Add</button>                                            </div>
                                        </div>
                                        <br />
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <div className="card scroll" style={{ width: "18rem", backgroundColor: '#f8f9fa', margin: 'auto' }}>
                                            <img className="card-img-top" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/9/0/FNK_the-best-biryani_H.JPG.rend.hgtvcom.826.620.suffix/1568143107638.jpeg" alt="" />
                                            <div className="card-body">
                                                <h5 className="card-title">chicken briyani</h5>
                                                <small className="text-muted">Burger</small> <br /><br />
                                                <span className="text-muted font-weight-bold" >$100</span>
                                                <button type="button" className="btn btn-outline-success" style={{ float: 'right', paddingRight: "30px", paddingLeft: "30px" }}>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <h4 id="list-item-2" className="text-muted" style={{ fontSize: '30px', fontWeight: '700', paddingTop: '20px', paddingBottom: '20px' }}>Burger</h4>
                                <div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/1200px-Indian-vegetarian-mark.svg.png" style={{ width: '2%' }} alt=""></img>
                                    <span className="text-muted"> chicken briyani</span><br /> <br />
                                    <span className="text-muted font-weight-bold">$100</span>
                                    <button type="button" className="btn btn-outline-success" style={{ float: 'right', paddingRight: "30px", paddingLeft: "30px" }}>Add</button> <br />
                                </div>
                                <br />
                                <hr />
                                <div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/1200px-Indian-vegetarian-mark.svg.png" style={{ width: '2%' }} alt=""></img>
                                    <span className="text-muted"> chicken briyani</span><br /> <br />
                                    <span className="text-muted font-weight-bold">$100</span>
                                    <button type="button" className="btn btn-outline-success" style={{ float: 'right', paddingRight: "30px", paddingLeft: "30px" }}>Add</button><br />
                                </div>
                                <br />
                                <hr />
                                <div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/1200px-Indian-vegetarian-mark.svg.png" style={{ width: '2%' }} alt=""></img>
                                    <span className="text-muted"> chicken briyani</span><br /> <br />
                                    <span className="text-muted font-weight-bold">$100</span>
                                    <button type="button" className="btn btn-outline-success" style={{ float: 'right', paddingRight: "30px", paddingLeft: "30px" }}>Add</button><br />
                                </div>
                                <br />
                                <hr />
                                <div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/1200px-Indian-vegetarian-mark.svg.png" style={{ width: '2%' }} alt=""></img>
                                    <span className="text-muted"> chicken briyani</span><br /> <br />
                                    <span className="text-muted font-weight-bold">$100</span>
                                    <button type="button" className="btn btn-outline-success" style={{ float: 'right', paddingRight: "30px", paddingLeft: "30px" }}>Add</button><br />
                                </div>
                                <br />
                                <hr />
                                <h4 id="list-item-3" className="text-muted" style={{ fontSize: '30px', fontWeight: '700', paddingTop: '20px', paddingBottom: '20px' }}>Snacks</h4>
                                <div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/1200px-Indian-vegetarian-mark.svg.png" style={{ width: '2%' }} alt=""></img>
                                    <span className="text-muted"> chicken briyani</span><br /> <br />
                                    <span className="text-muted font-weight-bold">$100</span>
                                    <button type="button" className="btn btn-outline-success" style={{ float: 'right', paddingRight: "30px", paddingLeft: "30px" }}>Add</button> <br />
                                </div>
                                <br />
                                <hr />
                                <div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/1200px-Indian-vegetarian-mark.svg.png" style={{ width: '2%' }} alt=""></img>
                                    <span className="text-muted"> chicken briyani</span><br /> <br />
                                    <span className="text-muted font-weight-bold">$100</span>
                                    <button type="button" className="btn btn-outline-success" style={{ float: 'right', paddingRight: "30px", paddingLeft: "30px" }}>Add</button> <br />
                                </div>
                                <br />
                                <hr />
                                <div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/1200px-Indian-vegetarian-mark.svg.png" style={{ width: '2%' }} alt=""></img>
                                    <span className="text-muted"> chicken briyani</span><br /> <br />
                                    <span className="text-muted font-weight-bold">$100</span>
                                    <button type="button" className="btn btn-outline-success" style={{ float: 'right', paddingRight: "30px", paddingLeft: "30px" }}>Add</button> <br />
                                </div>
                                <br />
                                <hr />
                                <h4 id="list-item-4" className="text-muted" style={{ fontSize: '30px', fontWeight: '700', paddingTop: '20px', paddingBottom: '20px' }}>Beverages</h4>
                                <div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/1200px-Indian-vegetarian-mark.svg.png" style={{ width: '2%' }} alt=""></img>
                                    <span className="text-muted"> chicken briyani</span><br /> <br />
                                    <span className="text-muted font-weight-bold">$100</span>
                                    <button type="button" className="btn btn-outline-success" style={{ float: 'right', paddingRight: "30px", paddingLeft: "30px" }}>Add</button> <br />
                                </div>
                                <br />
                                <hr />
                                <div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/1200px-Indian-vegetarian-mark.svg.png" style={{ width: '2%' }} alt=""></img>
                                    <span className="text-muted"> chicken briyani</span><br /> <br />
                                    <span className="text-muted font-weight-bold">$100</span>
                                    <button type="button" className="btn btn-outline-success" style={{ float: 'right', paddingRight: "30px", paddingLeft: "30px" }}>Add</button> <br />
                                </div>
                                <br />
                                <hr />
                                <div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/1200px-Indian-vegetarian-mark.svg.png" style={{ width: '2%' }} alt=""></img>
                                    <span className="text-muted"> chicken briyani</span><br /> <br />
                                    <span className="text-muted font-weight-bold">$100</span>
                                    <button type="button" className="btn btn-outline-success" style={{ float: 'right', paddingRight: "30px", paddingLeft: "30px" }}>Add</button> <br />
                                </div>
                                <br />
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}