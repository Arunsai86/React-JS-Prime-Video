import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

import './index.css'

const settings = {
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
}

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )
  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="banner-image"
      />
      <div className="bottom-section">
        <h1 className="title">Action Movies</h1>
        <ul className="slider-container">
          <Slider {...settings}>
            {actionMovies.map(eachMovie => (
              <MovieItem eachMovieItem={eachMovie} key={eachMovie.id} />
            ))}
          </Slider>
        </ul>
        <h1 className="title">Comedy Movies</h1>
        <ul className="slider-container">
          <Slider {...settings}>
            {comedyMovies.map(eachMovie => (
              <MovieItem eachMovieItem={eachMovie} key={eachMovie.id} />
            ))}
          </Slider>
        </ul>
      </div>
    </div>
  )
}
export default PrimeVideo
