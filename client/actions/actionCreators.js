export function fetchData() {
    return dispatch => {
        fetch(`/newsAPI`)
            .then(blob => blob.json())
            .then(data => {
                console.log(`data from fetch:`, data);
                dispatch({ type: `LOAD_ARTICLES`, load: data.articles });
                dispatch({ type: `LOAD_USER`, load: data.user });
                dispatch({ type: `LOAD_ARCHIVES`, load: data.archives });
            });
    };
};

export function login() {
    return dispatch => {
        fetch(`/login`, {
            method: `POST`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: `kitters`,
                password: `password`
            })
        })
            .then(blob => blob.json())
            .then(data => {
                console.log(`data from fetch:`, data);
                dispatch({ type: `LOAD_ARTICLES`, load: data.articles });
                dispatch({ type: `LOAD_USER`, load: data.user });
                dispatch({ type: `LOAD_ARCHIVES`, load: data.archives });
            });
    }
};




