import React from 'react';
import { Link } from 'react-router-dom';


const Sticky = ({ openCloseUserModal, openCloseLoginModal, history, link, location, fetchData }) => {
    const logout = () => {
        fetchData();
        history.replace(`/`);
    }
    const statusButton = link ? <button onClick={logout}>Logout</button>
        : [
            <button onClick={openCloseLoginModal}>Login</button>,
            <button onClick={openCloseUserModal}>Signup</button>
        ];

    if (link && location.pathname === `/archive`) link = <Link to="/">Home</Link>
    return (
        <div style={style}>
            {statusButton}
            {link}
        </div>
    );
};

const style = {
    height: `10vh`,
    border: `1px solid red`
};

export default Sticky;