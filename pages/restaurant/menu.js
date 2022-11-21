import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Menu from '../../components/menus'
import axios from 'axios'
import Header from '../../components/header'

//import { NextAuth as authOptions } from 'pages/api/auth/[...nextauth]'
//import { getServerSession } from "next-auth/next"
export default function AddMenu({data}) {
    //use useeffect to fetch menu items
    const [loading,setLoading]=useState(false)
    const [menu,setMenu]=useState({
        monday:[],
        tuesday:[],
        wednesday:[],
        thursday:[],
        friday:[],
        saturday:[],
        sunday:[]
    })
    useEffect(()=>{
        console.log(data);
        setLoading(true)
        axios.post('/api/restau/getMenu',{
            
        })
        .then(resp=>{
           console.log(resp.data);
           let {data}=resp;
           setMenu({
            monday:data.monday,
            tuesday:data.tuesday,
            wednesday:data.wednesday,
            thursday:data.thursday,
            friday:data.friday,
            saturday:data.saturday,
            sunday:data.sunday
           })

        })
        .catch(e=>{
            console.log(e);
        })
        .finally(()=>setLoading(false))
    },[])
  return (
    <React.Fragment>
        <Header/>
    <div className='container'>
        
        <h2 className='text-center'>Add Edit or your Menu here</h2>
        {loading==false && (
             <Row>
             <Col md={6}>
                 <Menu day='monday' items={menu.monday}/>
             </Col>
             <Col md={6}>
                 <Menu day='tuesday' items={menu.tuesday}/>
             </Col>
             
             <Col md={6} className='mt-2'>
                 <Menu day='wednesday' items={menu.wednesday}/>
             </Col>
             <Col md={6} className='mt-2'>
                 <Menu day='thursday' items={menu.thursday}/>
             </Col>
             <Col md={6} className='mt-2'>
                 <Menu day='friday' items={menu.friday}/>
             </Col>
             <Col md={6} className='mt-2'>
                 <Menu day='saturday' items={menu.saturday}/>
             </Col>
         </Row>
        )}
       
    </div>
    </React.Fragment>
  )
}

const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

/*export async function getServerSideProps(context) {
    
    let result=  await axios.post('http://localhost:3000/api/restau/getMenu');
    //let   data= await result.data
    return {
      props: {
        data:'data'
      } // will be passed to the page component as props
    }
  }*/
  