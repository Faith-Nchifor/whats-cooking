import connectToDatabase from '../../../lib/mongodb';
import Restaurant from '../../../lib/models/restaurant';
import Menu from '../../../lib/models/menu';

const  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default async function handler(req, res) {
  //get menu
     
     const id = req.body.id;
     
     
    if(!id){
     return '/'
    }
              try{
               await connectToDatabase();
               
               let restau=await Restaurant.findOne({id:id})
               if (restau._id){
                let email=restau.email;
                let meals=await Menu.findOne({email:email});
                res.status(200).send(meals)
               }
               else{
                return '/'
               }
               
              
          }
          catch(error){
               console.log('error');
               console.log(error);
               res.status(400).send('error occured')
          }
        
    
}
