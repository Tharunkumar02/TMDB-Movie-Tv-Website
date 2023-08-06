import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getApiConfiguration, getGenres } from './features/homeSlice'
import { useDispatch, useSelector } from 'react-redux'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import SearchResult from './pages/searchResults/SearchResult'
import Explore from './pages/explore/Explore'
import Error404 from './pages/404/Error404'
import { getMovies } from './utils/api/api'

function App() {

  const dispatch = useDispatch()
  const { url, genres } = useSelector((state) => state.home)

  useEffect(() => {
    fetchApiConfig()
    genresCall()
  }, [])

  const fetchApiConfig = () => {
    getMovies('/configuration').then((res) => {
      // console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url))
    })
  }

  const genresCall = async () => {
    let promises = []
    let endPoint = ["movie", "tv"]
    let allGenres = {}

    endPoint.forEach((url) => {
      promises.push(getMovies(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises)
    // console.log(data)

    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item))
    })

    dispatch(getGenres(allGenres))
  }


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
