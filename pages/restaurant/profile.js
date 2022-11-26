import { Button } from "react-bootstrap"
import { useEffect, useRef, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router';
import Image from 'next/image'
import axios from "axios";

// i will use a custom hook to do something here-- oh, i remember! to save profile to database
function updateProfile(profile) {
    const [isSaved,setIsSaved]=useState(false);

}

export default function Profile(){
    useEffect(()=>{
        if(!session){
         router.push('/')
        }
        
       /* axios.get('/api/restau/getProfile')
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
        })*/
    },[])
    const ref=useRef()
    
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
                <form className='' >
                    <div className="text-center">
                    <Image 
                      className='card-img'
                      alt='img'
                      src={process.env.default_img}
                      height={200}
                      width={250}
                    />
                    </div>
                    <div className='col-md-8 col-lg-6 mx-auto'>
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
                        <Button className='d-block mx-auto'>Save Changes</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}