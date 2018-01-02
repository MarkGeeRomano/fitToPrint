//reducer takes in two things:
//1. an action
//2. copy of current state

function indices(state = {}, action) {
    switch (action.type) {
        case `SET_INDICES`:
            const newState = {};
            action.load.forEach(media => newState[media] = 0)
            return newState;
        case `MOVE_STORIES`:            
            return {...state, [action.load.media] : state[action.load.media] + action.load.index}
    };
    return state;
};

export default indices;