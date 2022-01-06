import axios from "axios";
import { pageNumber } from "../../common/Pagination/pageNumber";

// let query;

export const img_base_url = "https://image.tmdb.org/t/p/w1280";
const base_url = "https://api.themoviedb.org/3";
const api_key = "?api_key=eb6efa05b2b8136a07d256a13fbb4f15&language=en-US&page=";
const most_popular_url = "/movie/popular"
const popular_movies_api = base_url + most_popular_url + api_key;
const popular_person_api = base_url + "/person/popular?api_key=eb6efa05b2b8136a07d256a13fbb4f15&language=en-US&page=";
const genres_url = "https://api.themoviedb.org/3/genre/movie/list?api_key=eb6efa05b2b8136a07d256a13fbb4f15&language=en-US";

export const getMovies = () =>
    axios.get(popular_movies_api + pageNumber)
        .then(response => response.data.results);

export const getGenres = () =>
    axios.get(genres_url)
        .then(response => response.data.genres);

export const getPeople = () =>
    axios.get(popular_person_api + pageNumber)
        .then(response => response.data.results);

export const getMoviesByQuery = (query) =>
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=eb6efa05b2b8136a07d256a13fbb4f15&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(response => response.data.results);