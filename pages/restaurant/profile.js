import { Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router';
import axios from "axios";

export default function Profile(){
    useEffect(()=>{
        if(!session){
         router.push('/')
        }
        axios.get('/api/restau/getProfile')
        .then(resp=>{
            console.log(resp.data)
            let data=resp.data
            setUserData({
                name:data.name,
                email:data.email,
                city:data.city
            })
        })
        .catch(e=>{
            console.log(e);
        })
    },[])
    const router= useRouter()
    const {data:session}=useSession();
    const [userData,setUserData]=useState({
        name:'',
        email:'',
        city:''
    })
    return(
        <div className="col col-10 col-md-8 col-md-6 mx-auto" id='profile-page'>
            <div className="card ">
                <img src="#" alt="pic" className='restau-pic d-block'/>
                <button className="btn btn-sm">Edit Profile Pic</button>
                <form className='d-block' >
                    <div>
                        <label>Name:</label>
                        <input type={'text'} required value={userData.name} className='form-control'/>
                    </div>
                    <div>
                        <label>City:</label>
                        <input type={'text'} required value={userData.city} className='form-control'/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type={'email'} required value={userData.email} className='form-control'/>
                    </div>
                    <Button>Save Changes</Button>
                </form>
            </div>
        </div>
    )
}