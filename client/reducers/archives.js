//reducer takes in two things:
//1. an action
//2. copy of current state

function archives(state = {}, action){  
    switch(action.type){
        case `LOAD_ARCHIVES`:            
            return action.load ? action.load : state;
    }      
    return state;
};

export default archives;