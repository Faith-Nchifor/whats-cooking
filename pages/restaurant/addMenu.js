import React, { useState } from 'react'

export default function AddMenu() {
    //use useeffect to fetch menu items
    const [menu,setMenu]=useState([])
    const [items,setItems]=useState([])

    function newItem(e){
        
    }
  return (
    <div>
        <ol type='a' name='menuItems'>
            {menu.length>0 && menu.map((item,i)=>{
                return(
                    <li key={i}>{item}</li>
                )
            })}
        </ol>
        <form>
            <input type='text' placeholder='name'/>
            <button type='submit' >Save</button>
        </form>
    </div>
  )
}
