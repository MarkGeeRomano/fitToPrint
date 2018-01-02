import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';

import FeedGrid from './FeedGrid';
import Sticky from './Sticky';
import LoginModal from './LoginModal';
import CreateUserModal from './CreateUserModal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userModalIsOpen: false,
            loginModalIsOpen: false
        };
        this.openCloseUserModal = this.openCloseUserModal.bind(this);
        this.openCloseLoginModal = this.openCloseLoginModal.bind(this);
    };

    openCloseUserModal() {
        this.setState(prevState => ({ userModalIsOpen: !prevState.userModalIsOpen }));
    };
    openCloseLoginModal() {
        this.setState(prevState => ({ loginModalIsOpen: !prevState.loginModalIsOpen }));
    };

    componentDidMount() {
        // this.props.fetchData();
        this.props.login({userName:`kitters`,password:`password`});
    };

    render() {
        const { login, location, createUser} = this.props;
        const { savedArticles } = this.props.user;

        const link = savedArticles ? <Link to="/archive">Go to archived</Link> : null;
        return [
            <Sticky
                link={link}
                openCloseUserModal={this.openCloseUserModal}
                openCloseLoginModal={this.openCloseLoginModal}
                location={location.pathname}
                {...this.props}
            />,
            <CreateUserModal
                userModalIsOpen={this.state.userModalIsOpen}
                openCloseUserModal={this.openCloseUserModal}
                createUser={createUser}
            />,
            <LoginModal
                loginModalIsOpen={this.state.loginModalIsOpen}
                openCloseLoginModal={this.openCloseLoginModal}
                login={login}
            />,
            <Switch>
                <Route key="home" exact path="/" render={() => <FeedGrid home={true} {...this.props} />} />
                <Route key="archives" exact path="/archive" render={() => <FeedGrid {...this.props} />} />
            </Switch>
        ];
    };
};


function mapStateToProps(state) {
    return {
        articles: state.articles,
        user: state.user,
        archives: state.archives,
        indices: state.indices
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));