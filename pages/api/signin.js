import connectToDatabase from '../../lib/mongodb';
import Restaurant from '../../lib/models/restaurant';
const jwt= require('jsonwebtoken')
let jwtExpirySecs=600
export default async function handler(req, res) {
    console.log("login route active");
    //res.status(200).json({ url: req.url })
    const {email,password}=req.body
    try{
      await connectToDatabase();
      
          Restaurant.findOne({email:email},(err,result)=>{
              if(err){
                  console.log(err)
                  res.status(402).send(err)
              }
              else{
                 if(result!==null){
                    let token=jwt.sign({email:email},'secrety19',{
                      expiresIn:"600",
                      algorithm:'HS256'
                    })
                   // res.cookie("tk", token, { maxAge: jwtExpirySecs * 1000 })
                   //res.setHeader('Set-Cookie', serialize('token', token, { path: '/' }));
                    res.status(201).send(token)
                 }
                  else res.status(401).send('wrong auth details')
              }
        });
           
 }
 catch(error){
      console.log('error');
      console.log(error);
      res.status(400).send('error occured')
 }

    
  }
  