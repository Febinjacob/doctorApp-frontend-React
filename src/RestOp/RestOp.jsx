import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function RestOp({ hours, days }) {
    console.log(hours, days);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <p variant="primary" style={{ width: '8rem', height: '1rem' }} onClick={handleShow}>
                Available
            </p>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Available</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup as="ol" className='text-center ' >
                        <ListGroup.Item >Available-Days : {days}</ListGroup.Item>
                        
                        <ListGroup.Item as="li">Available-hours : {hours}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default RestOp