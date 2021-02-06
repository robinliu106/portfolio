import React from "react"
import Slider from "react-slick"
import NavBar from "../../components/NavBar"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import cookBookOne from "../images/cookbook/cookbook-1.png"
import cookBookTwo from "../images/cookbook/cookbook-2.png"
import cookBookThree from "../images/cookbook/cookbook-3.png"

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
          <h2>hello</h2>
          <img src={cookBookOne} />
        </div>
        <div>
          <img src={cookBookTwo} />
        </div>
        <div>
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
      cookbook
      <Carousel />
    </div>
  )
}

export default CookBook
