
const { MongoClient, ServerApiVersion } = require('mongodb');


  const uri = process.env.uri;

let cachedClient = null;
let cachedDb = null;
export async function connectToDatabase(){
  let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  await  client.connect();
  let db = client.db('restau');

  // set cache
  cachedClient = client;
  cachedDb = db; 
  return {
    client: cachedClient,
    db: cachedDb,
  };

}

