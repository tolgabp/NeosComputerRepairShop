import React from 'react';
import CustomerNavBar from '../components/CustomerNavbar';
import { Link } from 'react-router-dom';
export default function AdminPage() {
    return (
        <>

            <nav>
                <ul>
                    <li>
                        <Link to="/parts/">Add parts</Link>
                    </li>
                </ul>
            </nav>
            <CustomerNavBar />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'linear-gradient(to right, #f2f4f6, #ffffff)' }}>

                <h1 style={{ fontFamily: '"Roboto", sans-serif', marginBottom: '20px' }}>I AM ADMIN</h1>

            </div>
        </>
    )
}
