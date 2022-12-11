import axios from 'axios'
import React,{useCallback, useEffect, useState} from 'react'
import {Accordion, Col, Form, Modal} from 'react-bootstrap'
import Spinner from './spinner'

export default function Menu({day,items}) {
    const [menu,setMenu]=useState(items||[])
    useEffect(()=>{
        console.log(items);
    },[])
    const [show,setShow]=useState(false)
    const [msg,setMsg]=useState('')
    const [loading,setLoading]=useState(false)
    const saveDay=useCallback(()=>{
        if(menu.length>0){
            setLoading(true)
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
            .finally(()=>setLoading(false))
        }
        else {
            setMsg('you must put atleast one item on the menu!')
            setShow(true)
        }
        
    })
   
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
                <Accordion.Header ><h4 className='text-capitalize '>{day}</h4></Accordion.Header>
                <Accordion.Body>
                    {loading==true&&(
                        <Spinner/>
                    )}
                    <ol type='a' name='menuItems'>
                        {menu.length>0 && menu.map((dish,i)=>{
                            return(
                                <tr key={i}>
                                    <td><Form.Control type='disabled'  value={dish} name={menu.indexOf(dish)} /> </td>
                                    <td className='mb-2'><button className='btn btn-primary' onClick={()=>dropItem(dish)}>Drop item</button></td>
                                </tr>
                                
                            )
                        })}
                    </ol>
                    
                    <form className='d-block'>
                        <input type='text' placeholder='name' id='item' value={item} className='' onChange={(e)=>setItem(e.target.value)}/>
                        <button type='submit' onClick={addItem} className='btn-primary'>add</button>
                    </form>
                    <div className='text-center'>
                    <button onClick={saveDay} className='btn btn-warning mt-1'>Save Menu</button>
                    </div>
                        
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

// React.memo(Menu)
