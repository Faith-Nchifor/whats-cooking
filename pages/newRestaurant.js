import Head from 'next/head'
import React,{useState} from 'react';

export default function newRestaurant() {
    let restaurants=[];
    const [restau,setRestau]=useState({
        name:'',
        city:'',
        email:'',
        password:''
    })
    const editRestau=(e)=>{       
        setRestau({
            ...restau,
            [e.target.name]:e.target.value
        })
    }
    const addRestaurant=(e)=>{
        e.preventDefault();
        //console.log(restau);
        restaurants.push(restau);
        setRestau({
            name:'',
            city:'',
            email:'',
            password:''
        })

    }
  return (
    <div>
        <Head>
        <title>New Restaurant</title>
        </Head>
        <h2 className='text-center'>Register New Restaurant</h2>
        <div className='col-sm-12 col-md-6 col-lg-5 mx-auto'>
        <form onSubmit={addRestaurant}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name (of Restaurant)</label>
                <input type="text" className="form-control" id="name" name='name' required value={restau.name} onChange={editRestau}/>                
            </div>
            <div className="mb-3">
                <label htmlFor="city" className="form-label">Location (City)</label>
                <input type="text" className="form-control" id="city" name="city" required value={restau.city} onChange={editRestau}/>                
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Restaurant Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={restau.email} aria-describedby="emailHelp" required onChange={editRestau}/>                
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={restau.password} required onChange={editRestau}/>
            </div>
            
            <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    </div>
  )
}
