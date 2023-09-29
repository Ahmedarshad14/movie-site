import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState()
  const {id} = useParams()
  useEffect(() => {
    getData()
  },[])

  const getData = async () => {
    try {
      const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b77b9a6d7a246c64469f87198a6118d8&language=eng-US`)
     setMovieDetail(data)
    } catch (error) {
      console.log(error);
    }
  }
  return (
   <>
   <h1 className='text-white text-4xl pt-4'>{movieDetail ? movieDetail.title : ""}</h1>
   <h6 className='text-white text-2xl pt-4'>{movieDetail ? movieDetail.overview : ""}</h6>
    img src={<img className='h-[50vh]' src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.poster_path : ""}`} alt="" />}
  
   
   </>
  )
}

export default MovieDetails