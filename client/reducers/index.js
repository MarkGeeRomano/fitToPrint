import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import articles from './articles';
import archives from './archives';


const rootReducer = combineReducers({
    user,
    articles,
    archives,
    routing: routerReducer });

export default rootReducer;
