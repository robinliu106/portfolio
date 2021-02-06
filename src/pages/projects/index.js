import React, { Fragment } from "react"

import "../mystyles.scss"

import NavBar from "../../components/NavBar"

import ProjectCard from "../../components/ProjectCard"

import cookBookImage from "../../images/cookbook/cookbook-3.png"
import chatAppImage from "../../images/chatapp/chatapp-2.png"
import dinnerImage from "../../images/dinner/dinner-1.png"

const projectsRowOne = [
  {
    name: "Zen Cookbook",
    page: "cookbook",
    image: cookBookImage,
    gitHubURL: "https://github.com/robinliu106/cook-book-ts",
    description: "For your favorite recipes",
  },
  {
    name: "Chat With Friends",
    page: "chatwithfriends",
    image: chatAppImage,
    gitHubURL: "https://github.com/robinliu106/Chat-with-Friends",
    appURL: "https://rliu-chat-app-2.herokuapp.com/",
  },
  {
    name: "What's For Dinner?",
    page: "dinner",
    image: dinnerImage,
    gitHubURL: "https://github.com/robinliu106/whats-for-dinner-cra",
    appURL: "https://robinliu106.github.io/whats-for-dinner-cra/",
  },
]
const IndexPage = () => {
  const RowOne = () =>
    projectsRowOne.map((item, index) => (
      <div className="tile">
        <ProjectCard key={index} {...item} />
      </div>
    ))

  return (
    <Fragment>
      <NavBar />
      <div className="tile is-ancestor">
        <RowOne />
      </div>
    </Fragment>
  )
}

export default IndexPage
