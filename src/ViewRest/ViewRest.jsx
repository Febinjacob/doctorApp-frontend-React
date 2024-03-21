import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from '../base_url';
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/esm/Image'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import RestOp from '../RestOp/RestOp';
import Review from '../RestReview/Review';


function ViewRest() {
  const [restDetails, setRestDetails] = useState([])
  const { id } = useParams()
  console.log(id);

  const fetchData = async () => {
    const { data } = await axios.get(`${base_url}/doctors/${id}`)
    console.log(data);
    setRestDetails(data)

  }
  console.log(restDetails);
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>

      {
        restDetails ?
          <Row>
            <Col>
              <Image src={`${restDetails.image_url}`} fluid style={{ height: '550px', padding: '20px', margin: '20px' }} />
            </Col>

            <Col >

              <MDBListGroup className='text-center' style={{ minWidth: '22rem', padding: '50px' }}>
                <MDBListGroupItem style={{ fontSize: '1.5rem', fontWeight: '700' }} tag='a' action noBorders active aria-current='true' className='px-3'>
                  {restDetails.name}
                </MDBListGroupItem>
                <MDBListGroupItem tag='a' action noBorders className='px-3'>
                  Specialty : {restDetails.specialty}
                </MDBListGroupItem>
                <MDBListGroupItem tag='a' action noBorders className='px-3'>
                  Hospital : {restDetails.hospital}
                </MDBListGroupItem>
                <MDBListGroupItem tag='a' action noBorders className='px-3'>
                  Address : {restDetails.address}
                </MDBListGroupItem>
                <MDBListGroupItem tag='a' action noBorders className='px-3'>
                  Phone : {restDetails.phone}
                </MDBListGroupItem>
                <MDBListGroupItem tag='a' action noBorders className='px-3'>
                  Email : {restDetails.email}
                </MDBListGroupItem>
                <MDBListGroupItem tag='a' action noBorders className='px-3'>

                </MDBListGroupItem>
              </MDBListGroup>
              <div className='d-flex' style={{ justifyContent: 'space-evenly' }}>
                <MDBBtn rounded color='primary'>
                  <RestOp days={restDetails.available_days} hours={restDetails.available_hours} />
                </MDBBtn>
                <MDBBtn rounded color='warning' style={{paddingTop:'20px'}}>
                  <Review  reviews={restDetails.reviews}  />
                </MDBBtn>
              </div>
            </Col>
          </Row> : <p>No Data</p>

      }





    </>
  )
}

export default ViewRest