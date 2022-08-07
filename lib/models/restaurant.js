
import mongoose from 'mongoose'
 const restaurantSchema=new mongoose.Schema({
    
                name:{
                    type:String,
                    required:true
                },
               /* password:{
                    type:String,
                    required:true,
                    
                },*/
                city:{
                    type:String,
                    required:true
                },
                email:{
                    type:String,
                    required:true,
                    unique:true
                },            
    
})
export default mongoose.models.Restaurant || mongoose.model('Restaurant', restaurantSchema);
 
//create unique keys for restaurant
