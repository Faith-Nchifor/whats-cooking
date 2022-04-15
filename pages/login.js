import React from 'react'

export default function  login() {
  const [email,setEmail]=React.useState('')
  const [password,setPassword]= React.useState('')
    const login=(e)=>{
      e.preventDefault();
      fetch('/api/restaurant/login',{
        method:'POST',
        body:JSON.stringify({
          email:email,
          password:password
        })
      })
      .then(resp=>{
        if(resp.ok){
          return resp.json();
        }
        else{
          console.log(resp);
        }
      })
      .then(resp=>{
        if(resp){
          console.log(resp);
        }
      })
      .catch(e=>{
        console.log(e);
      })
        
    }
  return (
    <div> 
        <h4 className='text-center'>Login to the backend below</h4>
        <div className='col-sm-12 col-md-8 col-lg-4 mx-auto'>
        <form onSubmit={login}>
            <input type='email' placeholder='your email' required className='form-control m-2' onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' placeholder='password' required className='form-control m-2' onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit' className='m-2 '>Login</button>
        </form>
        </div>
    </div>
  )
}
