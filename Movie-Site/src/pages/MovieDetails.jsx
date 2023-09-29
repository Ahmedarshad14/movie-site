import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState()
  const {id} = useParams()
  useEffect(() => {
    getData()
  },[])

  const getData = async () => {
    try {
      response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b77b9a6d7a246c64469f87198a6118d8&language=eng-US`)
    } catch (error) {
      console.log(error);
    }
  }
  return (
   <>
    
   
   </>
  )
}

export default MovieDetails