import axios from "axios";

const api_key = "&api_key=eb6efa05b2b8136a07d256a13fbb4f15";
const base_url = "https://api.themoviedb.org/3";
const most_popular_url = "/discover/movie?sort_by=popularity.desc"
const api_url = base_url + most_popular_url + api_key;

export const getMovies = () => {
    axios.get(api_url)
    .then(rep => rep.data.results);
};