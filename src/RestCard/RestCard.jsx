import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBCardHeader,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function RestCard({ doctors }) {
    console.log(doctors);
    return (
        <div>
            <Link  to={`view/${doctors.id}`} style={{textDecoration:'none'}} >
            <MDBCard style={{width:'22rem' ,margin:'3rem'}}>
                <MDBCardImage src={doctors?.image_url} position='top' alt='...' style={{height:'14rem'}} fluid/>
                <MDBCardBody >
                    <MDBCardTitle className='text-center' style={{color:'purple'}}>{doctors?.name}</MDBCardTitle>
                    <MDBCardText>

                        <MDBCard style={{height:'10rem',width:'20rem'}}>
                            <MDBCardHeader>Specialty : {doctors?.specialty}</MDBCardHeader>
                            <MDBListGroup flush>
                                <MDBListGroupItem >Rating : {doctors?.rating} </MDBListGroupItem>
                                <MDBListGroupItem>Hospital : {doctors?.hospital}</MDBListGroupItem>
                                <MDBListGroupItem>Phone : {doctors?.phone}</MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCard>

                    </MDBCardText>
                    {/* <MDBBtn href='#'>Button</MDBBtn> */}
                </MDBCardBody>
            </MDBCard>
           

            </Link>
        </div>
    )
}

export default RestCard