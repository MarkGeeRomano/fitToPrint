import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';

import FeedGrid from './FeedGrid';
import Sticky from './Sticky';
import LoginModal from './modals/LoginModal';
import CreateUserModal from './modals/CreateUserModal';
import SubsModal from './modals/SubsModal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userModalIsOpen: false,
            loginModalIsOpen: false,
            subsModalIsOpen: false
        };
        this.openCloseUserModal = this.openCloseUserModal.bind(this);
        this.openCloseLoginModal = this.openCloseLoginModal.bind(this);
        this.openCloseSubsModal = this.openCloseSubsModal.bind(this);
    };

    openCloseUserModal() {
        this.setState(prevState => ({ userModalIsOpen: !prevState.userModalIsOpen }));
    };
    openCloseLoginModal() {
        this.setState(prevState => ({ loginModalIsOpen: !prevState.loginModalIsOpen }));
    };
    openCloseSubsModal() {
        this.setState(prevState => ({ subsModalIsOpen: !prevState.subsModalIsOpen }));
    };

    componentDidMount() {
        // this.props.fetchData();
        //default - logged in
        this.props.login({ userName: `kitters`, password: `password` });
    };

    render() {
        const {
            login,
            location,
            createUser,
            user: { savedArticles, subscriptions },
            availScripts
        } = this.props;

        const link = savedArticles ? <Link to="/archive">Go to archived</Link> : null;
        return [
            <Sticky
                link={link}
                openCloseUserModal={this.openCloseUserModal}
                openCloseLoginModal={this.openCloseLoginModal}
                openCloseSubsModal={this.openCloseSubsModal}
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
            <SubsModal
                subsModalIsOpen={this.state.subsModalIsOpen}
                openCloseSubsModal={this.openCloseSubsModal}
                availScripts={availScripts}
                subscriptions={subscriptions}
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
        indices: state.indices,
        availScripts: state.availScripts
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));