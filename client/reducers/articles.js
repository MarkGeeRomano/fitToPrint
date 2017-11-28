//reducer takes in two things:
//1. an action
//2. copy of current state

function articles(state = {}, action){  
    switch(action.type){
        case `LOAD_ARTICLES`:
            console.log(`Type:LOAD_ARTICLES, Load:`,action.load);    
            return action.load;
    }      
    return state;
};

export default articles;