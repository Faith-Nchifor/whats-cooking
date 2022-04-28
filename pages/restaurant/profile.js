import { Button } from "bootstrap"
import { useEffect } from "react"
//import {} from 're'

export default function Profile(){
    useEffect(()=>{

    },[])
    return(
        <div>
            <img src="#" alt="pic" className='restau-pic'/>
            <button>Edit Profile Pic</button>
            <form>
                <div>
                    <label>Name</label>
                    <input type={'text'} required />
                </div>
                <div>
                    <label>City</label>
                    <input type={'text'} required />
                </div>
                <div>
                    <label>Quater</label>
                    <input type={'text'} required />
                </div>
                <Button>Save Changes</Button>
            </form>
        </div>
    )
}