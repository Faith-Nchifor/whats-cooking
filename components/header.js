//import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';
export default function Header() {
    const {data:session}=useSession();
    if(session){
        return (
            <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            
            <li className="nav-item mx-md-2">
            <Link className="nav-link" href="/restaurant/profile">Profile</Link>
          </li>
          <li className="nav-item mx-md-2 ">
            <Link className="nav-link " href="/restaurant/menu">My Menu</Link>
          </li>
            <li className="nav-item mx-md-2">
              <Link className="nav-link" href="#">Restaurants</Link>
            </li>
            <li className="nav-item mx-md-2">
                 <button className="btn btn-primary " onClick={()=>signOut()}>Sign Out</button>                 
            </li>
          </ul>
        )
    }
  return (
    <ul className="nav">
  
     <li className="nav-item mx-md-2">
        <Link className="nav-link active" aria-current="page" href="/">Home</Link>
      </li>
      <li className="nav-item mx-md-2">
        <Link className="nav-link active" aria-current="page" href="about.js">About</Link>
      </li>
  <li className="nav-item mx-md-2">
      
        <button className="btn btn-primary " onClick={()=>signIn()}>Sign In</button>
  </li>
  <li className="nav-item mx-md-2">
    <Link href={'/signup'} className='text-decoration-none'>Register</Link></li>
</ul>
  )
}
