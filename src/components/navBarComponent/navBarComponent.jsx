//NAVEGADOR CON BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavBarComponent = () =>{

    return(
        
        <Navbar collapseOnSelect expand="lg"  style={{backgroundColor:'#ADC4CE'}} >
        <Container> 
          <img style={{width:'30px', margin: '10px'}} src='../imagenes/agenda.png'></img>

          <Navbar.Brand href="#home"><em><strong> AGENDAS AZULBLUE </strong>  </em> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Conócenos</Nav.Link>
              <Nav.Link href="#pricing">Actividades</Nav.Link>
              <NavDropdown title="Nuestros Productos" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Agendas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Planners
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Calendarios</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Otros
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Envíos a nivel nacional</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
               Más Información
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
         ) 

 }
 export default NavBarComponent; 
 