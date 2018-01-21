function availScripts(state = {}, action){  
    switch(action.type){
        case `LOAD_AVAIL_SCRIPTS`:             
            return action.load;
    };      
    return state;
};

export default availScripts;