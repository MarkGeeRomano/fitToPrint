import React from 'react';
import { Link } from 'react-router';
import LoginModal from './LoginModal';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };

        this.openCloseModal = this.openCloseModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);        
    };

    componentDidMount() {
        this.props.fetchData();        
    };

    openCloseModal() {
        this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }));
    };

    afterOpenModal() {
        this.subtitle.style.color = '#f00';
    };

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
                <button onClick={this.openCloseModal}>Open Modal</button>
                <LoginModal
                    openCloseModal={this.openCloseModal}
                    afterOpenModal={this.afterOpenModal}                    
                    modalIsOpen={this.state.modalIsOpen}
                    login={login}
                />
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    };
};

export default Main; 
