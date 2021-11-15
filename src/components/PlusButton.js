import React  from 'react'
import Button from "react-bootstrap/Button";

const PlusButton = (props) => {
//     console.log("plusbutton props" ,props);
//     const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
   //const handleShow = () => setShow(true);

    return (
        <div  style={{float:"right"}}>
           <Button className="btn btn-primary btn-circle fixed-bottom" 
            
           data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" 
           
           >+</Button> 

{/* <div show={show} onHide={handleClose} class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Planet</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>  */}
        </div>
    )
}

export default PlusButton
