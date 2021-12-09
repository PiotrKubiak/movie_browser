
function apiKeys() {
    const api_key = "&api_key=eb6efa05b2b8136a07d256a13fbb4f15";
    const base_url = "https://api.themoviedb.org/3";
    const most_popular_url = "/discover/movie?sort_by=popularity.desc"
    const api_url = base_url + most_popular_url + api_key;


    (async () => {
        try {
            const response = await fetch(api_url);
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const data = await response.json();
            console.log(data.results);
            showMovies(data.results)
        } catch {
            console.error("Something go wrong")
        }
    })();

}

function showMovies(data) {
    data.forEach(movie => {
        // const{original_title,vote_average,vote_count,poster_path,overview}= movie
    });

};

export default apiKeys;







// import { useState } from "react";

// // const img_url = "https://image.tmdb.org/t/p/w500/";

// export const useApiKeys = () => {
//     const api_key = "&api_key=eb6efa05b2b8136a07d256a13fbb4f15";
//     const base_url = "https://api.themoviedb.org/3";
//     const most_popular_url = "/discover/movie?sort_by=popularity.desc"
//     const api_url = base_url + most_popular_url + api_key;

//     const { movies, setMovies } = useState('');

//     (async () => {
//         try {
//             const response = await fetch(api_url);
//             if (!response.ok) {
//                 throw new Error(response.statusText)
//             }
//             const data = await response.json();

//             setMovies({data})
//         } catch {
//             console.error("coś się zjebało")
//         }
//     })();
//     return movies
// }

// // function setMovies(data) {
// //     data.forEach(movie => {
// //         // const{original_title,vote_average,vote_count,poster_path,overview}= movie
// //     });

// // };

// // export default useApiKeys;