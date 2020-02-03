import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
import Nav from 'react-bootstrap/Nav'

class Header extends React.Component {
  render() {
    return( 
      	<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		  	<Navbar.Brand href="#home">LOGO</Navbar.Brand>
		  	<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  	<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
			    <Nav>
			      <Nav.Link href="/">
					Home
			      </Nav.Link>
			      <Nav.Link href="/starships">
			        Starships
			      </Nav.Link>
			      <Nav.Link href="/planets">
			        Planets
			      </Nav.Link>
			    </Nav>
		  	</Navbar.Collapse>
		</Navbar>
    );
  }
}

export default Header