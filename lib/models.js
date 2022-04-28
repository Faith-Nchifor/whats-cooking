const archeType= require('archetype-js');
const {db} =require('./mongodb')

const Restaurant=db.createCollection("restaurant",{
    
})
//create unique keys for restaurant
/*let Restaurant= new archeType({
    name:{
        $type:'string',

    }
})*/