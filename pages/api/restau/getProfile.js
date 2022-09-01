import connectToDatabase from '../../../lib/mongodb';
import Restaurant from '../../../lib/models/restaurant';
import { getSession } from "next-auth/react"
export default async function handler(req, res) {
     console.log('get profile information');
     
     
     const session = await getSession({ req });
     console.log(session)
     
    if(!session.user){
     return '/'
    }
              try{
               await connectToDatabase();
               
               let restau=await Restaurant.findOne({email:session.user.email})
               res.status(200).send(restau)
               
              
          }
          catch(error){
               console.log('error');
               console.log(error);
               res.status(400).send('error occured')
          }
        
    
}
