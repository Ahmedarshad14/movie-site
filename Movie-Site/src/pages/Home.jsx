import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const getAllMovies = async () => {
			try {
				const response = await axios.get(
					"https://api.themoviedb.org/3/movie/popular?api_key=b77b9a6d7a246c64469f87198a6118d8&language=eng-US"
				);
				setMovies(response.data.results);
			} catch (error) {
				console.log("error");
			}
		};
		getAllMovies();
	}, []);
	return (
        <>
    <div className="my-8">
        <h1 className="text-white text-4xl font-bold mx-auto text-center">Top Movies</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
            <div key={movie.id} className="flex flex-col pb-2">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                <h2 className="text-white text-2xl">{movie.title}</h2>
            </div>
        ))}
    </div>
</>)
};

export default Home;
