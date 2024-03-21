import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Review({reviews }) {
    console.log(reviews);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <p variant="primary" onClick={handleShow}>
      Reviews
    </p>

    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header  closeButton>
        <Offcanvas.Title>Reviews</Offcanvas.Title>
      </Offcanvas.Header>
      <div></div>
      <Offcanvas.Body>
       {
        
        reviews?.map(item=>(
           
            <div style={{marginTop:'3rem'}} >
             <div style={{marginTop:'1rem'}} ><i class="fa-solid fa-1x fa-hospital-user" style={{color:'purple'}}></i> {item.patient_name}</div> 
              <div style={{marginTop:'1rem'}}><i class="fa-solid fa-1x fa-calendar-days" style={{color:'purple'}}></i> {item.date}</div>
             <div style={{marginTop:'1rem'}}> <i class="fa-solid fa-1x fa-star" style={{color:'purple'}}></i> {item.rating}</div>
             <div style={{marginTop:'1rem'}}> <i class="fa-solid fa-1x fa-comments" style={{color:'purple'}}></i> {item.comments}</div>
             <hr /> <hr />

            </div>
          
        ))
       }
      </Offcanvas.Body>
      
    </Offcanvas>
  </>
  )
}

export default Review