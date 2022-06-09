//import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
export default function Header() {
    const {data:session}=useSession();
    if(session){
        return (
            <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Restaurants</a>
            </li>
            <li class="nav-item">
                 <button class="btn btn-primary " onClick={()=>signOut()}>Sign Out</button>                 
            </li>
          </ul>
        )
    }
  return (
    <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Restaurants</a>
  </li>
  <li class="nav-item">
      
        <button class="btn btn-primary " onClick={()=>signIn()}>Sign In</button>:
        
      
  </li>
</ul>
  )
}
