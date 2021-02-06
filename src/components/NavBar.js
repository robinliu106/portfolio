import React from "react"

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Robin
            </a>
            <a className="navbar-item" href="/projects">
              Projects
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item" href="/resume">
                  Resume
                </a>
                <a className="navbar-item" href="/contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">mode toggle</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
