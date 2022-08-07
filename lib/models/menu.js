
import mongoose from 'mongoose'
 const menuSchema=new mongoose.Schema({
    
                restaurant:{
                    type:String,
                    required:true
                },
                monday:{
                    type:[String],
                   // required:true,
                    
                },
                tuesday:{
                    type:[String],
                    //required:true
                },
                wednesday:{
                    type:[String],
                    //required:true,
                    
                }, 
                thursday:{
                    type:[String],
                    //required:true,
                },
                friday:{
                    type:[String],
                    //required:true,
                }           
    
})
export default mongoose.models.Menu || mongoose.model('Menu', menuSchema);
 

