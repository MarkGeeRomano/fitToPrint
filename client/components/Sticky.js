import React from 'react';
import { Link } from 'react-router-dom';


const Sticky = ({ openCloseUserModal, openCloseLoginModal, openCloseSubsModal, history, link, location, fetchData }) => {
    const logout = () => {
        fetchData();
        history.replace(`/`);
    };

    const statusButton = link ?
        [<button onClick={logout}>Logout</button>,
        <button onClick={openCloseSubsModal}>Manage Subscriptions</button>]
        :
        [<button onClick={openCloseLoginModal}>Login</button>,
        <button onClick={openCloseUserModal}>Signup</button>];

    return [
        <div style={style}>
            {statusButton}
            {link && location.pathname === `/archive` ? <Link to="/">Home</Link> : link}
        </div>
    ];
};

const style = {
    height: `10vh`,
    border: `1px solid red`
};

export default Sticky;