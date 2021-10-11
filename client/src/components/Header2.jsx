import React from 'react'
import { Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


export const Header2 = () => {
  return (
    <>
    <Container>

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <LinkContainer to="/about"> 
        <li class="nav-item">
          <a class="nav-link">About</a>
        </li>
        </LinkContainer>
       
        
      </ul>
    </div>
  </div>
</nav>

      </Container>
    </>
  )
}

export default Header2;