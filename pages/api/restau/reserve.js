import Reserve from '../../../lib/models/reserve'
import connectToDatabase from '../../../lib/mongodb'
export default async function handler(req, res) {
    try{
        await connectToDatabase();
        Reserve.create({name:req.body.name,telephone:req.body.telephone,seats:parseInt(req.body.seats),time:req.body.time,restautant:req.body.restautant},
        (err,result)=>{
            if(err){
                console.log(err);
                res.status(500).send(err)
            }
            else {
                console.log(result);
                res.status(201).send('done')
            }
        }
        )
    }
    catch(e){
        console.log(e);
        res.status(500).send(e)
    }
   // res.status(200).send('done')
  }
  