import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { propertyDetailApi } from '../Services/api';


function PropertyDetail({proprtyId}) {


    let [property,setProperty]=useState()

    useEffect(()=>{
        fetchPropertyDetail()
    },[proprtyId])

   async  function fetchPropertyDetail(){

        let response=await propertyDetailApi(proprtyId)

        console.log(response.data);
        
    }



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Retrieve
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>PropertyDetail</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default PropertyDetail
