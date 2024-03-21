import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RestCard from '../RestCard/RestCard'
import {base_url} from '../base_url'





function AllRest() {
  // const base_url='http://localhost:3001'

  const[allRest,setAllRest]=useState([])

  const fetchData=async()=>{
    const {data}=await axios.get(`${base_url}/doctors`)
    console.log(data);
    setAllRest(data)
  }
  console.log(allRest);
  
  useEffect(()=>{
    fetchData()
  })
  return (
    <>
     <Row>
       {
        allRest.map((item)=>(
          <Col >
          <RestCard doctors={item}/>
          </Col>
        ))
   }

    </Row>
    </>
  )
}

export default AllRest