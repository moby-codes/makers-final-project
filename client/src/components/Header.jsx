import React from 'react'
import { Container } from 'react-bootstrap';


export const Header = () => {
  return (
    <>
    <Container>

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Learn4U</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item ml-auto">
                <a class="nav-link active" href="/">Home
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
               
                <li class="nav-item">
                  <a class="nav-link" href="/about">About</a>
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