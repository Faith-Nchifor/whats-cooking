const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
     
    // switch the methods
    switch (req.url) {
        case '/api/restaurant/auth': 
           res.status(200).json({ url: req.url })
            
        
        case '/api/restaurant/new': 
              // addRestau(req, res)
              try{
               let body=JSON.parse(req.body)
               
               // connect to the database
               let { db } = await connectToDatabase();
               await db.collection('restaurant').insertOne(body);
                res.status(201).json({message:'success!'})
          }
          catch(error){
               console.log(error);
               res.status(500).send(error)
          }
        
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
