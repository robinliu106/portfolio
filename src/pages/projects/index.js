import React, { Fragment } from "react"

import "../mystyles.scss"

import NavBar from "../../components/NavBar"

import ProjectCard from "../../components/ProjectCard"
const project = {
  name: "Cookbook",
  page: "cookbook",
  description: "A Zen cookbook",
  gitHub: "https://github.com/robinliu106/cook-book-ts",
}
const IndexPage = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="columns">
        <div className="column is-one-third">
          <ProjectCard {...project} />
        </div>
      </div>
    </Fragment>
  )
}

export default IndexPage
