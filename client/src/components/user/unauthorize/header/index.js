import React, { Component } from 'react';
import logo from '../../../../_Assets/332-3324201_gofood-logo-png-logo-go-food-vector.png';
import { Link } from 'react-router-dom';
import './index.css';
import Login from '../../login';
import Signup from '../../signup';

class Header extends Component {
    render() {
        return (
            <div>
                <Login />
                <Signup />
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <img src={logo} style={{ width: '15%' }} className="imgLogo" alt="" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link txtColor" > Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="" className="nav-link txtColor" data-toggle="modal" data-target="#exampleModalCenter" > Login</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="" className="nav-link txtColor" data-toggle="modal" data-target="#exampleModalCenter1" > Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link txtColor" > Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='' className="nav-link txtColor" > Help</Link>
                            </li>
                            <li className="nav-item dropdown" >
                                <p className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img alt="" style={{ width: '15%' }} src="" />
                                    AuthUser
                                </p>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: '#f8f9fa' }}>
                                    <Link className="dropdown-item txtColor" to="/orders">Orders</Link>
                                    <Link className="dropdown-item txtColor" to="/offers">Offers</Link>
                                    <Link className="dropdown-item txtColor" to="/favourites">Payments</Link>
                                    <Link className="dropdown-item txtColor" to="/payments">Favourites</Link>
                                    <Link className="dropdown-item txtColor" to="/address">Address</Link>
                                    <Link className="dropdown-item txtColor" to="/" >Logout</Link>
                                </div>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search for Area and Street.." aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header