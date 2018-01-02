import React from 'react';
import Modal from 'react-modal';
// import LoginForm from './LoginForm';
import CreateUserForm from './CreateUserForm';

const CreateUserModal = ({ openCloseUserModal, userModalIsOpen, createUser }) => {
    
    const submit = values => {
        createUser(values);
        openCloseUserModal();
    };
    return (
        <div>
            <Modal
                isOpen={userModalIsOpen}
                onRequestClose={openCloseUserModal}
                style={customStyles}                
            >
                <CreateUserForm onSubmit={submit} />
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

export default CreateUserModal;