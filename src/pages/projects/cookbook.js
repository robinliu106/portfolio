import React from "react"
import Slider from "react-slick"
import NavBar from "../../components/NavBar"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import cookBookOne from "../../images/cookbook/cookbook-1.png"
import cookBookTwo from "../../images/cookbook/cookbook-2.png"
import cookBookThree from "../../images/cookbook/cookbook-3.png"

import "@fortawesome/fontawesome-free/css/all.min.css"

const Carousel = ({ project }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div>
      <Slider {...settings}>
        <div>
          <h2>Enter a recipe url from (almost) any site</h2>
          <img src={cookBookOne} />
        </div>
        <div>
          <h2>Eat your favorite dishes</h2>

          <img src={cookBookTwo} />
        </div>
        <div>
          <h2>View your saved recipes</h2>

          <img src={cookBookThree} />
        </div>
      </Slider>
    </div>
  )
}

const CookBook = () => {
  return (
    <div>
      <NavBar />
      <section className="hero is-primary is-small">
        <div className="hero-body">
          <a href="/">
            <p className="title">Zen Cookbook</p>
            <p className="subtitle">
              A minimalist experience
              <span className="icon is-small" style={{ "margin-left": 10 }}>
                <i className="fas fa-link"></i>
              </span>
            </p>
          </a>
        </div>
      </section>
      <br />
      <Carousel />
    </div>
  )
}

export default CookBook
