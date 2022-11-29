import connectToDatabase from '../../../lib/mongodb';
import Restaurant from '../../../lib/models/restaurant';
import formidable from 'formidable';
import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import { getSession } from "next-auth/react"

cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    cloudinary_api_key: process.env.cloudinary_api_key, 
    cloudinary_api_secret: process.env.cloudinary_api_secret
  });
const saveFile = async (file) => {
    const data = fs.readFileSync(file.filepath);
    const pId= Date.now()
    const fileLoc=`./temps/${pId}`
    fs.writeFileSync(fileLoc, data);
   
    cloudinary.uploader.upload(file.filepath,
    { public_id: pId }, 
    function(error, result) 
    {
        if(error) {
            console.log(error)
            return null;
        }
       else  {
        console.log(result);
        fs.unlinkSync(fileLoc);
        return result;
    }
     });
    
  };


export default async function handler(req, res) {
     console.log('edit profile information');
    
     
     const session = await getSession({ req });
     
     
    if(!session.user){
     return '/'
    }

    const post = async (req, res) => {
       // res.send('hi')
        const form = new formidable.IncomingForm();
     //   const { fields, files } = await form.parse(req);
        //console.log(fields);
        form.parse(req, async function (err, fields, files) {
            console.log(err);
           
            //console.log('hii');
            if(files.img===undefined){
                //res.status(201).send("no file sent");
                //console.log("no file sent");
                updateDatabase(session,fields.name,fields.email,fields.city,undefined,res)
            }
            else{
               saveFile(files.img).then(
                    img=>{
                        if(img!==null){
                            updateDatabase(session,fields.name,fields.email,fields.city,img,res)
                            
                        }
                         else {
                            updateDatabase(session,fields.name,fields.email,fields.city,undefined,res)
                        }
                    }
                );
                //console.log(image);
                //res.status(201).send("file was sent");
                
            }
      
        
        });
    };
    post(req,res);
      
      
      
    //res.send('hi')

        
    
}

const updateDatabase= async (session,name,email,city,image,res)=>{
            try{
               await connectToDatabase();
               console.log(typeof(image));
                    const fields =image===undefined?{
                        name:name,
                        email:email,
                        city:city,
                       
                    }:
                    {
                        name:name,
                        email:email,
                        city:city,
                        image:{
                            id:image.public_id,
                            url:image.url
                        }
                    }
               await Restaurant.findOneAndUpdate({
                 email:session.user.email,
                 
               },fields
               ).then(
                 result=>{
                   console.log(result)
                   res.status(200).send(result)
                 }
               )
               .catch(e=>{
                 console.log(e);
                 res.status(400).send(e)
               })
               
              
          }
          catch(error){
               console.log('error');
               console.log(error);
               res.status(400).send(error)
          }
}
export const config = {
    api: {
      bodyParser: false
    }
  };
  