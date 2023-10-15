import React from 'react'
import{Navbar, Nav, Container} from 'react-bootstrap'
import cart from '../img/cart.png'
import logo from '../img/LogoVasco.png'
import './navbar.css';

const NavBarVasco = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="mx-auto">
      <Container>
        <Navbar.Brand href="#home">                 
            <img src={logo} className="d-inline-block align-top ml-auto logo" alt="Logo do Vasco da Gama"/>          
        </Navbar.Brand>              
        <Navbar.Toggle aria-controls="basic-navbar-nav mx-auto" />
          <Navbar.Collapse id="basic-navbar-nav mx-auto">
            <Nav className="mx-auto" style={{ margin: '0 auto' }}>
              <Nav.Link href="#equipaciones">EQUIPACIONES</Nav.Link>
              <Nav.Link href="#entrenamiento">ENTRENAMIENTO</Nav.Link>
              <Nav.Link href="#moda">MODA</Nav.Link>
              <Nav.Link href="#accesorios">ACCESORIOS</Nav.Link>
           </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#cart">                    
              <img src={cart} alt="Cartwidget" className="d-inline-block align-top mr-auto"/>            
          </Navbar.Brand>           
      </Container>
      </Navbar>
    </div>
  )
}

export default NavBarVasco