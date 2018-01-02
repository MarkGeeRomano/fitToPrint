// let's go!
import React from 'react';
import { render } from 'react-dom';

//install routing deps
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

//import css
import css from './styles/styles.scss';

//import components
import App from './components/App';

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);