const MOVIES_URL = "https://reactjs-cdp.herokuapp.com/movies";

export const fetchMovies = () =>
    fetch(MOVIES_URL)
        .then(res => res.json())
        .then((result) => result.data);