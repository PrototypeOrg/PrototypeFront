import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Offcanvas from 'react-bootstrap/Offcanvas'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
const Header = () => {
    return (
    <Navbar  bg="dark" variant="dark" expand={false}>
    <Container fluid>
      <Navbar.Brand href="/">
      
        Prototype</Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Prototype</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="Registro">Registro</Nav.Link>
            <NavDropdown title="Mas" id="offcanvasNavbarDropdown">
              <NavDropdown.Item href="#action3">Ajustes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Cerrar sesion
              
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
         
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  )
}

export default Header;
