//reducer takes in two things:
//1. an action
//2. copy of current state

function archives(state = {}, action){  
    switch(action.type){
        case `LOAD_ARCHIVES`:            
        console.log(`loading archives`)
        console.log(`old state:`,state);
        console.log(`new state:`,action.load);
            return action.load ? action.load : state;
    }      
    return state;
};

export default archives;