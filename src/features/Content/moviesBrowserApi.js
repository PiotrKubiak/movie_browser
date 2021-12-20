import axios from "axios";

export const img_base_url = "https://image.tmdb.org/t/p/w500";
const base_url = "https://api.themoviedb.org/3";
const api_key = "?api_key=eb6efa05b2b8136a07d256a13fbb4f15&language=en-US&page=1";
const most_popular_url = "/movie/popular"
// const api_key = "?api_key=eb6efa05b2b8136a07d256a13fbb4f15&language=en-US&page=";
const popular_movies_api = base_url + most_popular_url + api_key;
const popular_person_api = base_url + "/person/popular?api_key=eb6efa05b2b8136a07d256a13fbb4f15&language=en-US&page=1";
const genres_url = "https://api.themoviedb.org/3/genre/movie/list?api_key=eb6efa05b2b8136a07d256a13fbb4f15&language=en-US";

export const getMovies = () =>
    axios.get(popular_movies_api)
        .then(response => response.data.results);

export const getGenres = () =>
    axios.get(genres_url)
        .then(response => response.data.genres);

export const getPeople = () =>
    axios.get(popular_person_api)
        .then(response => response.data.results);

export const getPage = ({ page }) =>
    axios.get(setPage(page))
        .then(response => response.data.page);

export function setPage(page) {
    if (page) {
        const newUrl = { page };
        return (newUrl)
    }
};