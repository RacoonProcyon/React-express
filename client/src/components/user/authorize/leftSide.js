 import React from 'react';
import { Link } from 'react-router-dom';
export default function LeftSide() {
    return (
        <div style={{ backgroundColor: '#f8f9fa', padding: '30px' }}>
            <Link to="/orders" ><p style={{ fontSize: '20px', fontWeight: "700" }} className='text-muted sideTxt'>Orders</p></Link>
            <Link to="/offers" ><p style={{ fontSize: '20px', fontWeight: "700" }} className='text-muted sideTxt'>Offers</p></Link>
            <Link to="/favourites" ><p style={{ fontSize: '20px', fontWeight: "700" }} className='text-muted sideTxt'>Favourites</p></Link>
            <Link to="/payments" ><p style={{ fontSize: '20px', fontWeight: "700" }} className='text-muted sideTxt'>Payments</p></Link>
            <Link to="/address" ><p style={{ fontSize: '20px', fontWeight: "700" }} className='text-muted sideTxt'>Address</p></Link>
        </div>
    )
}