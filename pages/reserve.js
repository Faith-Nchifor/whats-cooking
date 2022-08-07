import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'

export default function Reserve() {
    //i need to get the restaurant name through the route. when i have internet
    const [name,setName]=useState('')
    const [custDetails,setCustDetails]=useState({
        name:'',
        telephone:'',
        time:'',
        seats:1
    })
    const editCustDetails=(e)=>{
        setCustDetails({
            ...custDetails,
            [e.target.name]:e.target.value
        })
    }
    const submit=(e)=>{
        e.preventDefault();
        //console.log(custDetails);
        axios.post('/api/restau/reserve',custDetails)
        .then(resp=>{
            console.log(resp.data);
        })
        .catch(e=>{
            console.log(e);
        })
    }
  return (
    <div>
        <Col className='mx-auto' xs={11} sm={10} md={7} lg={6}>
            <p className='text-center'>Reserve At Restaurant- TiTi</p>
            <form className='d-block mx-auto' onSubmit={submit}>
                <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' name='name' onChange={editCustDetails}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telephone</Form.Label>
                        <Form.Control type='tel' name='telephone' onChange={editCustDetails}/>
                    </Form.Group>
                    {/*<Form.Group>
                        <Form.Label>Day</Form.Label>
                        <Form.Control type='date'/>
                    </Form.Group>*/}
                    <Form.Group>
                        <Form.Label>Time</Form.Label>
                        <Form.Control type='time' name='time' onChange={editCustDetails} />
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Seats</Form.Label>
                        <Form.Control type='number' name="seats" onChange={editCustDetails}/>
                    </Form.Group>
                    <Button>Cancel</Button>
                    <Button type='submit'>Send</Button>
            </form>
        </Col>
    </div>
  )
}
