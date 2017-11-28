// let's go!
import React from 'react';
import { render } from 'react-dom';

//import css
import css from './styles/styles.scss';

//import components
import App from './components/App'
import FeedGrid from './components/FeedGrid'
import ArchiveGrid from './components/ArchiveGrid'

//install routing deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store'

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={FeedGrid}></IndexRoute>
                <Route path="/archive" component={ArchiveGrid}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById(`root`));