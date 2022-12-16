import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Header from '../components/header';
import axios from 'axios';
import { useEffect, useState,useCallback } from 'react';
import { useRouter } from 'next/router';
import Spinner from '../components/spinner';


export default function Home({datas}) {
  const [restaus,setRestaus]=useState([])
  const [loading,setLoading]=useState(false)
  const router=useRouter()
  const getRestau=useCallback((()=>{
    setLoading(true)
      axios.get('./api/restau/get').then(
        resp=>{
          console.log(resp.data.length);
          sessionStorage.setItem('user', resp.data)
          setRestaus(resp.data)
        }
      ).catch(
        e=>{
          console.log(e);
        }
      )
      .finally(()=>setLoading(false))
  }))
  useEffect( ()=>{
    let rs=sessionStorage.getItem('restau');
    console.log(rs);
    if(rs && rs.length>0){
      setRestaus(rs)
     }
     else{
      getRestau()
     }


 
    
  },[])
  //console.log(users);
  return (
    <div className='container'>
      <Head>
        <title>Welcome To Chop don done! </title>
        <meta name="description" content="Find wetin di cook :)A Next Js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        {loading===true &&(
          <Spinner/>
        )}
      <main className={styles.main}>
        <h1 className={styles.title}>
        Welcome To Chop don done!
        </h1>
        <p className='fs-2 text-center'>Find a Restaurant and Menu Below</p>
        <div className='row mx-auto'>
            {restaus.length>0 &&(
              restaus.map(r=>{
                return(
                  <div key={r._id} className='col-11 col-md-6 col-lg-3 card mx-auto'>
                    <Image 
                      className='card-img'
                      alt='img'
                      src={r.image? r.image.url:'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg'}
                      height={200}
                      width={250}
                    />
                    <p><b>{r.name}</b></p>
                    <p>{r.city}</p>
                    <button className='btn btn-primary' onClick={()=>router.push({
                      pathname:'/restaurant/restaurant',
          
                      query:{
                        id:r._id
                      }
                    })}>
                      View more
                    </button>

                  </div>
                )
              })
            )}
          </div>
        {/*<p className={styles.description}>
          Get started with the following steps {' '}
          
        </p>

        <div className='col-sm-12 col-md-8 col-lg-4 mx-auto'>
        <ul className="list-group">
          <li className="list-group-item">Register Your Restaurant</li>
          
          <li className="list-group-item">Customize your page</li>
          <li className="list-group-item">Update Your Menu</li>
          <li className="list-group-item">Wait for Orders</li>
        </ul>
        </div>*/}
      
      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

/*export async function getServerSideProps(context) {
  
  

  
  const resp =await axios.get('api/hello.js')
  const data= await resp.data
   return{
    props:{
      data:data|| null
    }
  }
 
 // }
  //catch(e){
    //console.log(e);
  //}
  
}*/

