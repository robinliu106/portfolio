import React from "react"
import Slider from "react-slick"
import NavBar from "../../components/NavBar"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import chatAppOne from "../../images/chatapp/chatapp-1.png"
import chatAppTwo from "../../images/chatapp/chatapp-2.png"

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
          <h2>Join a chat room</h2>
          <img src={chatAppOne} />
        </div>
        <div>
          <h2>Message friends in real time!</h2>

          <img src={chatAppTwo} />
        </div>
      </Slider>
    </div>
  )
}

const ChatApp = () => {
  return (
    <div>
      <NavBar />
      <section className="hero is-primary is-small">
        <div className="hero-body">
          <a href="https://rliu-chat-app-2.herokuapp.com/">
            <p className="title">Chat with Friends</p>
            <p className="subtitle">
              Built with Socket.io!
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

export default ChatApp
