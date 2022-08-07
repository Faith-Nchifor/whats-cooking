import NextAuth from 'next-auth'
import connectToDatabase from '../../../lib/mongodb'
import Restaurant from '../../../lib/models/restaurant'

import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT,
            clientSecret:process.env.GOOGLE_SECRET
        }),
        

    ],
    callbacks:{
        async signIn({ user, account, profile, email, credentials }) {
            try{
                await connectToDatabase();
                let user= await Restaurant.findOne({email:profile.email})
            if (user!==null) {
              return true
            } else {
              // Return false to display a default error message
              return '/unauthorized'
              // Or you can return a URL to redirect to:
              // return '/unauthorized'
            }
            }
            catch(e){
                console.log(e)
                return 'an error occurred while connecting to the database'
            }
            
          }
        }
    
})