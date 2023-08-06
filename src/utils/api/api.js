import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODhlZTI2YTk1MDRlZDY4N2I0ZGYwYmI4ZjhlY2NhYSIsInN1YiI6IjY0YTZkMGI0Y2FlNjMyMDExZmEzMzQxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fbRNt31v2wIqOnxlexMhfbTTbTqrsDNwpQtdprXWI8A"

const headers = {
    Authorization: "Bearer " + TMDB_TOKEN,
}

export const getMovies = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } 
    catch (error) {
        console.log(error);
        return error;
    }
}