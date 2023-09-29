// import {useState, React, useEffect } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import MovieCard from '../components/MovieCard'

// const Movies = () => {
//   const {type} = useParams();
//   const [movies, setMovies] = useState([]);

//   const getMovies = async () => {
//     try {
//       const response = await axios.get(`https://api.themoviedb.org/3/movie/${ type ? type : 'popular'}?api_key=b77b9a6d7a246c64469f87198a6118d8&language=eng-US`);
//       setMovies(response.data.results)
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     getMovies()
//   },[])

//   useEffect(() => {
//     getMovies()
//   },[type])

//   return (
//   <>
//     <div>
//       <h1 className="text-white text-8xl text-center mx-auto py-8 mb-6 uppercase">
//         {type ? type : 'popular'}
//       </h1>
//     </div>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
//       {movies.map((movie) => (
//         <div key={movie.id} className="flex flex-col pb-2">
//           <MovieCard movie={movie} />
//         </div>
//       ))}
//     </div>
//   </>
// );
//       }
// export default Movies


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const Movies = () => {
  const { type } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${type || 'popular'}?api_key=b77b9a6d7a246c64469f87198a6118d8&language=eng-US`
      );
      setMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [type]);

  return (
    <>
      <div>
        <h1 className="text-white text-8xl text-center mx-auto py-8 mb-6 uppercase">
          {type ? type : 'popular'}
        </h1>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading movies</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="flex flex-col pb-2">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Movies;