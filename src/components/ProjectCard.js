import React from "react"

const ProjectCard = ({ name, page, image, gitHubURL, appURL, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by2">
          <img src={image} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
          </div>
        </div>

        <div className="content">{description}</div>
      </div>
      <footer className="card-footer">
        <a href={`/projects/${page}`} className="card-footer-item">
          <span className="icon is-small">
            <i className="fas fa-info" />
          </span>
        </a>
        <a href={appURL ?? "#"} className="card-footer-item">
          <span className="icon is-small">
            <i className="fas fa-play" />
          </span>
        </a>
        <a href={gitHubURL ?? "#"} className="card-footer-item">
          <span className="icon is-small">
            <i className="fas fa-code" />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default ProjectCard
