import { getSession } from "next-auth/react"
import connectToDatabase from '../../../lib/mongodb';
import Menu from '../../../lib/models/menu';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//set menu items
export default async function handler(req, res) {
    let {menu,day}=req.body
    console.log(req.body);
    //res.send('hi')
    try{
      const session = await getSession({ req });
      if(!session){
        return '/';
      }
      else{
       // console.log(session);
        await connectToDatabase();
        Menu.findOneAndUpdate({
          restaurant:session.user.email,
          
        },{[day]:menu},
        {upsert:true,
        new:true}
        ).then(
          result=>{
            console.log(result)
            res.status(200).send(result)
          }
        )
        .catch(e=>{
          console.log(e);
        })
      }
    }
    catch(e){
      console.log(e);
      res.status(500).send(e)
    }
  
    
  }
  