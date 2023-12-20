//NAVEGADOR CON BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import {useCategory} from '../../hooks/useCategory';


const NavBarComponent = () =>{
  const {category}= useCategory ()
    return(
        
        <Navbar collapseOnSelect expand="lg"  style={{backgroundColor:'#ADC4CE'}} >
        <Container> 
          <img style={{width:'30px', margin: '10px'}} src='../imagenes/logo.png'></img>

          <Link  style={{textDecoration:'none', color:'black'}}to="/"><em><strong> Mi primera tienda </strong>  </em> </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="#pricing">Actividades</Nav.Link>
              <NavDropdown  title="Categorias" id="collapsible-nav-dropdown" >
                {
                  category.map((item, index )=>{
                    return <NavDropdown.Item key={index} href="" > 
                    <Link style={{textDecoration:'none', color:'black', textTransform:'capitalize'}}to={`/category/${item}`}> {item}</Link>
                    </NavDropdown.Item>
                  
                  })
                }
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
 