const archeType= require('archetype-js');
const {connectToDatabase} =require('./mongodb')

let {db}=connectToDatabase();
 const Restaurant=db.createCollection("Managers",{
    validator:{
        $jsonSchema:{
            //bsonType:"object",
            required:["name","email","password","city"],
            properties:{
                name:{
                    bsonType:'string',
                    description:'name must be a string and its required'
                },
                password:{
                    bsonType:'string',
                    description:' must be a string and it required'
                },
                city:{
                    bsonType:'string',
                    description:'name must be a string and its required'
                },
                email:{
                    bsonType:'string',
                    description:'name must be a string and its required'
                },
            }
        }
    }
    
})
export default Restaurant
//create unique keys for restaurant
/*let Restaurant= new archeType({
    name:{
        $type:'string',

    }
})*/