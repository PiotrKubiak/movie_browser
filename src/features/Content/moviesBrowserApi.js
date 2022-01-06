import axios from "axios";
import { pageNumber } from "../../common/Pagination/pageNumber";


export const img_base_url = "https://image.tmdb.org/t/p/w1280";
const base_url = "https://api.themoviedb.org/3";
const api_key = "?api_key=eb6efa05b2b8136a07d256a13fbb4f15&page=";
const popular_movies_api = base_url + "/movie/popular" + api_key;
const popular_person_api = base_url + "/person/popular" + api_key + pageNumber;
const genres_url = base_url + "/genre/movie/list" + api_key;
const moviesByQuery = base_url + "/search/movie" + api_key;
const peopleByQuery = base_url + "/search/person" + api_key;

export const getMovies = () =>
    axios.get(popular_movies_api + pageNumber)
        .then(response => response.data.results);

export const getPeople = () =>
    axios.get(popular_person_api)
        .then(response => response.data.results);

export const getGenres = () =>
    axios.get(genres_url)
        .then(response => response.data.genres);

export const getMoviesByQuery = (query) =>
    axios.get( moviesByQuery + "&query=${query}" )
        .then(response => response.data.results);

export const getPeopleByQuery = (query) =>
    axios.get(peopleByQuery + "&query=${query}")
        .then(response => response.data.results);