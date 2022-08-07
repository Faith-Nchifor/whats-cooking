import axios from 'axios'
import React,{useState} from 'react'
import {Accordion, Col, Form, Modal} from 'react-bootstrap'

export default function Menu({day}) {
    const [menu,setMenu]=useState([])
    const [show,setShow]=useState(false)
    const [msg,setMsg]=useState('')
    const saveDay=()=>{
        axios.post('/api/restau/editMenu',{
            day:day,
            menu:menu
        })
        .then(resp=>{
            console.log(resp.data);
            setMsg('saved!')
            setShow(true)

        })
        .catch(e=>{
            console.log(e);
        })
    }
   
    const [item,setItem]= useState('')

    const addItem=(e)=>{
        e.preventDefault();
        if(item.trim().length>1 && !menu.includes(item)){

            menu.push(item)
            setItem('')
        }
        
        
    }
    function dropItem(item2Drop){
        console.log(menu.indexOf(item2Drop))
    //var newMenu=menu.splice(menu.indexOf(item2Drop),1)
      //  setMenu(newMenu)
      var newMenu=menu.filter(menuItem=>{
        return menuItem != item2Drop // adjust
    })
        setMenu(newMenu)
        
    }
  return (
    <div>
        <Col>
        <Accordion>
            <Accordion.Item eventKey='0'>
                <Accordion.Header>{day}</Accordion.Header>
                <Accordion.Body>
                    <ol type='a' name='menuItems'>
                        {menu.length>0 && menu.map((dish,i)=>{
                            return(
                                <tr key={i}>
                                    <td><Form.Control type='text' value={dish} name={menu.indexOf(dish)} /> </td>
                                    <td className='border border-2' onClick={()=>dropItem(dish)}>drop</td>
                                </tr>
                                
                            )
                        })}
                    </ol>
                    
                    <form className='d-block'>
                        <input type='text' placeholder='name' id='item' value={item} onChange={(e)=>setItem(e.target.value)}/>
                        <button type='submit' onClick={addItem}>add</button>
                    </form>
                        <button onClick={saveDay}>Save Menu</button>
                </Accordion.Body>
            </Accordion.Item>
                 
        </Accordion>
            
        </Col>
        <Modal show={show} onHide={()=>{setShow(false);setMsg('')}}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <p>{msg}</p>
            </Modal.Body>
        </Modal>
    </div>
  )
}
