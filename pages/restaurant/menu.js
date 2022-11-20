import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Menu from '../../components/menus'

export default function AddMenu() {
    //use useeffect to fetch menu items
    useEffect(()=>{
        axios.post('/api/restau/getMenu',{
            
        })
        .then(resp=>{
           

        })
        .catch(e=>{
            console.log(e);
        })
    })
  return (
    <div>
        <Row>
            <Col>
                <Menu day='monday'/>
            </Col>
            <Col >
                <Menu day='tuesday'/>
            </Col>
        </Row>
    </div>
  )
}
