//reducer takes in two things:
//1. an action
//2. copy of current state

function user(state = {}, action){  
    switch(action.type){
        case `LOAD_USER`:
            console.log(`Type:LOAD_USER, Load:`,action.load);    
            return action.load;
    }      
    return state;
};

export default user;