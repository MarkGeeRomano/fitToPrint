import React from 'react';
import Modal from 'react-modal';
// import LoginForm from './LoginForm';
import LoginForm from '../forms/LoginForm';

const LoginModal = ({ openCloseLoginModal, loginModalIsOpen, login }) => {    
    const submit = values => {
        login(values);
        openCloseLoginModal();
    };

    return [
        <div>
            <Modal
                isOpen={loginModalIsOpen}
                onRequestClose={openCloseLoginModal}
                style={customStyles}                
            >
                <LoginForm onSubmit={submit} />
            </Modal>
        </div>
    ];
};

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default LoginModal;