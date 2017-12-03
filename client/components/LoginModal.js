import React from 'react';
import Modal from 'react-modal';
import LoginForm from './LoginForm'

const LoginModal = props => {
    console.log(`props:`,props)
    const { openModal, afterOpenModal, closeModal, modalIsOpen, login } = props;
    const submit = values => login(values);
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
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