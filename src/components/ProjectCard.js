import React from "react"

const ProjectCard = ({ name, page, gitHub, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
          </div>
        </div>

        <div className="content">{description}</div>
      </div>
      <footer className="card-footer">
        <a href={`/projects/${page}`} className="card-footer-item">
          Info
        </a>
        <a href="#" className="card-footer-item">
          Go
        </a>
        <a href={gitHub} className="card-footer-item">
          GitHub
        </a>
      </footer>
    </div>
  )
}

export default ProjectCard
