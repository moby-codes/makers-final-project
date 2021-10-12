import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <>
    <Container>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
            <Link to="/" id="custom-font-2" class="navbar-brand" ><strong>Code4Fun</strong></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item ml-auto">
                <span class="visually-hidden">(current)</span>
              </li>
              <li class="nav-item">
                <Link to="/about" class="custom-font-2 nav-link">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </Container>
    </>
  )
}

export default Header;

// <li class="nav-item">
// <a class="nav-link" href="/signin">Sign In</a>
// </li>