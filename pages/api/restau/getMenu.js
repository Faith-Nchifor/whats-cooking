import connectToDatabase from '../../../lib/mongodb';
import Menu from '../../../lib/models/menu';
import { getSession } from "next-auth/react"
export default async function handler(req, res) {
     console.log('get menu information');
     
     
     const session = await getSession({ req });
    
     
    if(!session || !session.user){
     return '/'
    }
              try{
               await connectToDatabase();
               
               let menu=await Menu.findOne({email:session.user.email})
               res.status(200).send(menu)
               
              
          }
          catch(error){
               console.log('error');
               console.log(error);
               res.status(400).send('error occured')
          }
        
    
}
