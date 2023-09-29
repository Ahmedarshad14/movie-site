import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Movies from "./Movies";
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
				console.log(error);
			}
		};
		getAllMovies();
	}, []);
	return (
        <>   
		<Carousel
	dynamicHeight = {true}
	autoPlay = {true}
	transitionTime={2}
	infiniteLoop = {true}
	showThumbs = {false}
	showArrows = {true}
	>
	{	
		movies.map((movie) => (
				<img key={movie.id} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
			))
		}
	</Carousel>

    <Movies />
</>)
};

export default Home;
