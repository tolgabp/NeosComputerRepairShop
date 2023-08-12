import * as React from 'react';
import AddParts from '../components/AddParts';
import CustomerNavbar from '../components/CustomerNavbar';
import { Link } from 'react-router-dom';


const AddPartPage = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/adminPage/">Admin Page</Link>
                    </li>
                </ul>
            </nav>

            <CustomerNavbar />
            <AddParts />

        </>);
};

export default AddPartPage;