import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import user from './user';
import articles from './articles';
import archives from './archives';


const rootReducer = combineReducers({
    user,
    articles,
    archives,
    form: formReducer,
    routing: routerReducer
});

export default rootReducer;
