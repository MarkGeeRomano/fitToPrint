function articles(state = {}, action){  
    switch(action.type){
        case `LOAD_ARTICLES`:             
            return action.load;
    };      
    return state;
};

export default articles;