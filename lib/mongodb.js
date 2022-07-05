
const {  ServerApiVersion } = require('mongodb');
const mongoose= require('mongoose');

const uri = process.env.uri;


let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}
export default async function connectToDatabase(){
 // let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
 //let client = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

 if (cached.conn) {
  return cached.conn
}

if (!cached.promise) {
  const opts = {
    bufferCommands: false,
  }

  cached.promise = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }).then((mongoose) => {
    return mongoose
  })
}
cached.conn = await cached.promise
return cached.conn
  
}

