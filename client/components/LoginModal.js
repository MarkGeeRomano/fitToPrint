import React from 'react';
import Modal from 'react-modal';
import LoginForm from './LoginForm'

const LoginModal = ({ openCloseModal, afterOpenModal, modalIsOpen, login }) => {
    const submit = values => login(values);
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={openCloseModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <LoginForm onSubmit={submit} />
            </Modal>
        </div>
    );
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