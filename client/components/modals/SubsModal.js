import React from 'react';
import Modal from 'react-modal';

import SubsForm from '../forms/SubsForm';

const SubsModal = ({ openCloseSubsModal, subsModalIsOpen, availScripts, subscriptions /*some function*/ }) => {        
    const submit = values => {
        // someFunction(values);
        // openCloseSubsModal();        
    };

    return [
        <div>
            <Modal isOpen={subsModalIsOpen} onRequestClose={openCloseSubsModal} style={customStyles}>
                <SubsForm availScripts={availScripts} onSubmit={submit} subscriptions={subscriptions} />
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

export default SubsModal;