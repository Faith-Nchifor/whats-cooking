import connectToDatabase from '../../lib/mongodb';
//const ObjectId = require('mongodb').ObjectId;
import Restaurant from '../../lib/models/restaurant';
//import { getSession } from "next-auth/react"
export default async function handler(req, res) {
     console.log('hi');
     let {name,city,email}=req.body;
    
         let data={
          email:email,
          name:name,
          city:city
     };
     
     //const session = await getSession({ req });
     //console.log(session)
     
    
              try{
               await connectToDatabase();
               //manually check for duplicates
               let dupEmail=await Restaurant.findOne({email:email})
               //console.log(dupEmail===null);
              // console.log("duplicate name found: "+dupEmail);
               if(dupEmail ===null){
                    let dupName=await Restaurant.findOne({name:name});
                    //console.log("duplicate name found: "+dupName);
                    if(dupName===null){
                        // console.log(dupName);
                         //res.status(200).send('no dups')
                          Restaurant.create(data,(err,resp)=>{
                              if(err){
                                   console.log(err)
                                   res.status(402).send(err)
                              }
                              else{
                                   console.log(resp)
                                   res.status(201).json({message:'success!'})
                              }
                         });
                    }
                    else{
                         res.status(400).send('Restuarant Name already exists. Use another')
                    } 
               }
               else{
                    res.status(400).send('Email already exists. Use another')
               }
               //let body=JSON.parse(req.body)
              // const rest=new Restaurant(body)
               
              
              
             /* rest.save().then(
                    resp=>{
                         console.log(resp)
                         res.status(201).json({message:'success!'})
                    }
               ).catch(e=>{
                    console.log(e)
                         res.status(401).send(e)
               })*/
              
          }
          catch(error){
               console.log('error');
               console.log(error);
               res.status(400).send('error occured')
          }
        
    
}

async function addRestau(req,res){
     try{
          let body=JSON.parse(req.body)
          
          // connect to the database
          let { db } = await connectToDatabase();
          await db.collection('restaurant').insertOne(body);
           res.status(201).send('success!')
     }
     catch(error){
          console.log(error);
          res.status(500).send(error)
     }
}
function getRestau(req,res){

}
/* Restaurant.find()
               .then(rests=>{
                    console.log(rests);
                    res.status(200).send(rests);
               })
               .catch(e=>{
                    console.log(e)
                         res.status(401).send(e)
               })*/
              
