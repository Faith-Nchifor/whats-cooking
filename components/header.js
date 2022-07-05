//import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';
export default function Header() {
    const {data:session}=useSession();
    if(session){
        return (
            <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
            <Link className="nav-link" href="/restaurant/profile">Profile</Link>
          </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Restaurants</a>
            </li>
            <li className="nav-item">
                 <button className="btn btn-primary " onClick={()=>signOut()}>Sign Out</button>                 
            </li>
          </ul>
        )
    }
  return (
    <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Home</a>
  </li>
  
  <li className="nav-item">
      
        <button className="btn btn-primary " onClick={()=>signIn()}>Sign In</button>
  </li>
  <li className="nav-item">
    <Link href={'/signup'} className='text-decoration-none'>Register</Link></li>
</ul>
  )
}
