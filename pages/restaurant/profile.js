import { Button } from "react-bootstrap"
import { useEffect, useRef, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router';
import Image from 'next/image'
import axios from "axios";
import Spinner from "../../components/spinner";
import Header from "../../components/header";

// i will use a custom hook to do something here-- oh, i remember! to save profile to database
function updateProfile(profile) {
    const [isSaved,setIsSaved]=useState(false);
    

}

export default function Profile(){
    //console.log(process.env.NEXT_PUBLIC_DEFAULT_IMG);
    useEffect(()=>{
        console.log(session);
        if(!session){
         router.push('/')
        }
        setLoading(true)
      axios.get('/api/restau/getProfile')
        .then(resp=>{
            console.log(resp.data)
            let data=resp.data
            setUserData({
                name:data.name,
                email:data.email,
                city:data.city,
                image:data.image
            })

        })
        .catch(e=>{
            console.log(e);
        })
        .finally(()=>setLoading(false))
    },[])
    const imgRef=useRef()
    
    const router= useRouter()
    const {data:session}=useSession();
    const [userData,setUserData]=useState({
        name:'',
        email:'',
        city:'',
        image:undefined
    })
    const [img,setImg]=useState(null)
    const [loading,setLoading]=useState(false)
    const focusInput=()=>{
        imgRef.current.click()

    }
    const editProfile=()=>{
        const fd=new FormData();
        fd.append('name',userData.name)
        fd.append('email',userData.email)
        fd.append('city',userData.city)
        fd.append('product_id',userData.image.product_id)
        fd.append('img',img)
            console.log(userData); 
            setLoading(true)
          axios.post('/api/restau/editProfile',fd)
            .then(resp=>{
                
                let data=resp.data
                console.log(data)
                alert('saved')
                
            })
            .catch(e=>{
                console.log(e);
            })
            
           // .finally(()=>setLoading(false))

    }
    const editItem=(e)=>{
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        })
    }
    const changeImg=(e)=>{
        let file=e.target.files[0];
        let obj=URL.createObjectURL(file)
        setUserData({
            ...userData,
            image:{
                ...userData.image,
                url: obj
            }
        })
        console.log(obj);
        setImg(file)
    }
    return(
        <div className="container fluid">
            <Header/>
            <div className="col col-10 col-md-8 col-md-6 mx-auto" id='profile-page'>
                {loading===true &&(
                    <Spinner/>
                )}
                <div className="card ">
                
                    <button className="btn btn-sm" onClick={focusInput}>Edit Profile Pic</button>
                    <form className='' >
                        <div className="text-center">
                        <input type='file' accept='image/JPEG,image/jpg, image/PNG' ref={imgRef} className='d-none' onChange={changeImg}/>
                        <Image 
                        className='card-img'
                        alt='img'
                        src={userData.image? userData.image.url: process.env.NEXT_PUBLIC_DEFAULT_IMG}
                        height={200}
                        width={250}
        />
                        </div>
                        <div className='col-md-8 col-lg-6 mx-auto'>
                            <div>
                                <label>Name:</label>
                                <input type={'text'} required defaultValue={userData.name} className='form-control' name="name" onChange={editItem}/>
                            </div>
                            <div>
                                <label>City:</label>
                                <input type={'text'} required defaultValue={userData.city} className='form-control' name="city" onChange={editItem}/>
                            </div>
                            <div>
                                <label>Email:</label>
                                <input type={'email'} required defaultValue={userData.email} className='form-control' name="email" onChange={editItem}/>
                            </div>
                            <Button className='d-block mx-auto mt-2' onClick={editProfile}>Save Changes</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}