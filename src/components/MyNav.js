import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




const MyNav = () => {
    return (
        <div>
          <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#home" className="pt-4">Spacious</Navbar.Brand>
    </Container>
  </Navbar>
         </div>
    )
}

export default MyNav;
