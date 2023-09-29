import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Routes, Route } from 'react-router-dom'
import Movies from "./pages/Movies"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MovieDetails from "./pages/MovieDetails"

function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/movies/:type' element = {<Movies />}></Route>
      <Route path='/movieDetail/:id' element = {<MovieDetails />}></Route>
      
    </Routes>
    <Footer />
    </>
  )
}

export default App
