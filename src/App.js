import React ,{useState} from "react";
import Container from "react-bootstrap/Container";
import MyCards from "./components/MyCards";
import characterImages from "./imageData/charactersData";
import planetImages from "./imageData/planetsData";



function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  return (
    
      
    <Container fluid className="px-5">
      <MyCards planetImages={planetImages} characterImages={characterImages} onClick={handleShow}/>


      {/* offcanvas implementation */}

      <button class="btn btn-primary btn-circle fixed-bottom" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={handleShow}>+</button>

 <div show={show} onHide={handleClose} class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div> 
    

    </Container>
    
  );
}

export default App;
