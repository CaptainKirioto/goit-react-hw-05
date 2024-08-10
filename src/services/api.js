import axios from "axios";

const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
    headers: {
        Authorization: 'Bearer api_read_access_token'
    }
}

const fetchMovies = async (query) => {
    const response = await axios.get(url, options), { 

    }
}