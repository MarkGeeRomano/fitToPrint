import { createStore, compose, applyMiddleware} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

import thunk from 'redux-thunk';

//create an object from default data
const defaultState = { 
    articles:{}, 
    user:{},
    archives: {}    
};

const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

//adds hot reload for changes to reducer
if(module.hot){
    module.hot.accept('./reducers', ()=>{
        const nextRootReducer = require(`./reducers/index`).default;
        store.replaceReducer(nextRootReducer);
    });
};

export default store;

