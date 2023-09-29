import React from "react";

const MovieCard = ({movie}) => {
	return (
		<>
			<img
				src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
				alt=""
			/>
			<h2 className="text-white text-2xl">{movie.title}</h2>
			<p className="block text-white">Release Date: {movie.release_date}</p>
			<p className="block text-white">Rating: {movie.vote_average}</p>

		</>
	);
};

export default MovieCard;
