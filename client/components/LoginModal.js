import React from 'react';
import Modal from 'react-modal';

const LoginModal = React.createClass({
    render() {
        const { openModal, afterOpenModal, closeModal, modalIsOpen, login } = this.props;
        return (
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    {/* <form action="/login" method="post"> */}
                        Username<input name="userName" label="Username" />
                        <br/>
                        Password<input name="password" label="Password" />
                        <button onClick={()=>{ login()
                            // fetch(`/login`,{
                            //     method: `POST`,
                            //     headers: {
                            //         'Accept': 'application/json',
                            //         'Content-Type': 'application/json'
                            //       },
                            //     body: JSON.stringify({
                            //         userName:`kitters`,
                            //         password:`password`
                            //     })
                            // })
                        }}>Send my greetings</button>
                    {/* </form> */}
                </Modal>
            </div>
        );
    }
});

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