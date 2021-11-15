import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import MyNav from "./MyNav";
import { Link } from "react-router-dom";
import PlanetButton from "./PlanetButton";
import CharacterButton from "./CharacterButton";
import PlusButton from "./PlusButton";



const MyCards = ({planetImages,characterImages}) => {
  //console.log(characterImages);
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
      {planetImages.map((planet) => (
        <Col className="col-sm-6 col-md-4 col-lg-3">
        <Card className="m-1 w-300 h-150 mycard"  onClick={handleShow} 
        data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <Image key={planet.id} src= {planet.src} alt={planet.alt} roundedCircle className="mx-auto d-block mb-0"/>
          <Card.Body className="mt-0 pt-0">
          <Card.Title className="pt-0">Planet Alpha</Card.Title>
          <Card.Text>
            Pop:235
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      ))}
  
  <PlusButton show={show} handleClose={handleClose}/>
    </Row>
    

    <div show={show} onHide={handleClose} class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Planet Alpha</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>
    Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.
    </p>
    <p className="mb-0">Population</p>
    <b>234</b>

    <Row>
      <Col> <h6 className="ml-0 mt-3 fw-5">CHARACTERS</h6></Col>
      <Col><Button className="btn-light">+</Button></Col>
    </Row>

     <div>
       {characterImages.map((character) => (
         <div class="card">
         <div class="row no-gutters">
             <div class="col">
                 <img key={character.id} src={character.src} class="img-fluid" alt={character.alt}/>
             </div>
             <div class="col">
                 <div class="card-block px-2">
                     <h4 class="card-title">{character.name}</h4>
                     <p class="card-text">23 friends</p>
                 </div>
             </div>
         </div>
   </div>
 
       
      ))}

     </div>
   


  
  </div>
</div>
    
    </Container>
  );
};

export default MyCards;
