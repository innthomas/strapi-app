import React,{useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from "react-bootstrap/Col";
import MyNav from "./MyNav";
import {Link } from "react-router-dom";
import PlanetButton from "./PlanetButton";
import CharacterButton from "./CharacterButton";
import PlusButton from './PlusButton';






const XterCards = ({characterImages}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
 
 
    return (
        <Container>
          <MyNav />
          <nav className="ml-5">
        <Link to="/planets"> <PlanetButton/> </Link> {" "}
        <Link to="/characters"> <CharacterButton/> </Link>{" "}
      </nav>{" "}
        <Row>

       {characterImages.map((character) => (
         <Col className="col-sm-6 col-md-4 col-lg-3">
          <Card className="m-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={handleShow}>
          <Image key={character.id} src= {character.src} alt={character.alt} rounded/>
          <Card.Body>
            <Card.Title >{character.name}</Card.Title>
            <Card.Text>
              23 friends
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      ))}
     
     
     <PlusButton onClick={handleShow}/>
      
    </Row>

    <div show={show} onHide={handleClose} class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Jane Cooper</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Jane is a really nice person. She has been living on planet Alpha for the last 10 years.</p>

    <div className="mb-3 pb-3">
    <Row>
    <Col> <span>Planet</span> </Col>
    <Col> <span>Friends</span> </Col>
    </Row>
    <Row>
    <Col> <span><b>Alpha</b></span> </Col>
    <Col> <span><b>23</b></span> </Col>
    </Row>
    </div>
    <div className="mb-5 pb-5">
    <span className="mt-5 pt-5">FRIENDS</span>
    </div>
  </div>
</div>

    </Container>
      
    )
}

export default XterCards
