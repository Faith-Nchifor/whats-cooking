
import mongoose from 'mongoose'
const reserveSchema=new mongoose.Schema({
   
               restaurant:{
                   type:String,
                   required:true
               },
               time:{
                   type:String,
                  // required:true,
                   
               },
               seats:{
                   type:Number,
                   //required:true
               },
               telephone:{
                   type:Number,
                   //required:true,
                   
               },
               name:{
                type:String
               }

   
})
export default mongoose.models.Reserve || mongoose.model('Reserve', reserveSchema);


