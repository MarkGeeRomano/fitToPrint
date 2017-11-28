import React from 'react';
import { Link } from 'react-router';
import LoginModal from './LoginModal';

const Main = React.createClass({

    getInitialState() {
        return { modalIsOpen: false };
    },

    componentWillMount() {
        this.props.fetchData();
    },

    openModal() {
        this.setState({ modalIsOpen: true });
    },

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    },

    closeModal() {
        this.setState({ modalIsOpen: false });
    },

    render() {
        
        const { savedArticles } = this.props.user;
        const { login } = this.props;
        const link = savedArticles ? (<Link to="/archive">Go to archived</Link>) : `You're but a guest`;
        
        return (
            <div>
                <h1>Fit to Print</h1>
                <h3>
                    {link}
                </h3>
                <button onClick={this.openModal}>Open Modal</button>
                <LoginModal
                    openModal={this.openModal}
                    afterOpenModal={this.afterOpenModal}
                    closeModal={this.closeModal}
                    modalIsOpen={this.state.modalIsOpen}
                    login={login}
                />
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
});

export default Main; 
