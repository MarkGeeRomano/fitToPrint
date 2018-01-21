export function fetchData() {
    return dispatch => {
        fetch(`/newsAPI`)
            .then(blob => blob.json())
            .then(data => {                
                dispatch({ type: `LOAD_ARTICLES`, load: data.articles });
                dispatch({ type: `LOAD_USER`, load: data.user });
                dispatch({ type: `LOAD_ARCHIVES`, load: data.archives });
                dispatch({ type: `SET_INDICES`, load: Object.keys(data.articles) });
            });
    };
};

export function login({ userName, password }) {    
    return dispatch => {
        fetch(`/login`, {
            method: `POST`,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, password })
        })
            .then(data => data.json())
            .then(data => {                
                dispatch({ type: `LOAD_ARTICLES`, load: data.articles });
                dispatch({ type: `LOAD_USER`, load: data.user });
                dispatch({ type: `LOAD_ARCHIVES`, load: data.archives });
                dispatch({ type: `LOAD_AVAIL_SCRIPTS`, load: data.availScripts });
            })
            .catch(err => console.log(`err:`, err))
    };
};

export function createUser(load) {
    console.log(`firing createUser`);
    return dispatch => {
        fetch(`/createUser`, {
            method: `POST`,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(load)
        })
            .then(data => data.json())
            .then(data => {
                console.log(`data from fetch:`, data);
                dispatch({ type: `LOAD_ARTICLES`, load: data.articles });
                dispatch({ type: `LOAD_USER`, load: data.user });
                dispatch({ type: `LOAD_ARCHIVES`, load: data.archives });
            })
            .catch(err => console.log(`err:`, err))
    };
};

export function moveStories(load) {
    return {
        type: `MOVE_STORIES`,
        load
    };
};

export function addArchive(load) {    
    console.log(`firing addArchive`);    
    return dispatch => {
        fetch(`/addArchive`, {
            method: `POST`,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(load)
        })
            .then(data => data.json())
            .then(data => {                
                console.log(`data returned`)
                dispatch({ type: `LOAD_ARCHIVES`, load: data.archives });
            })
            .catch(err => console.log(`err:`, err))
    };
};

export function modifyScripts(load){
    console.log(`firing modifyScripts`,load)
}



