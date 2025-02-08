import { NextAuthOptions } from 'next-auth'
import  CredentialsProvider from 'next-auth/providers/credentials'
import User from '@/lib/database/user.model'
import { connectDB } from '@/lib/database/connection'
import bcrypt from 'bcryptjs'
export const authOptions:NextAuthOptions = {
    providers:[
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
              username: { label: 'username', type: 'text' },
              password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials:any):Promise<any> {
                await connectDB();
                const user=await User.findOne({username:credentials.username});
                if (!user) {
                    throw new Error('No user found with this email');
                  }
                if(user){
                    const passwordMatch=await bcrypt.compare(credentials.password,user.password);
                    if(passwordMatch){
                        return user;
                    }else{
                        throw new Error('Invalid password');
                    }
                }else{
                    throw new Error('No user found with this email');
                }
            },
        }),
       

    ],
    callbacks:{
        async jwt({ token, user }) {
            
            if (user) {
                token._id = user._id?.toString(); 
                token.username = user.username;
              }
              return token;
        },
        async session({session, token}){
             if(token){
                 session.user={
                    _id:token._id,
                    username:token.username
                 }
             }
             return session;
        }
    },
    session:{
        strategy:'jwt'
    },
    secret :process.env.NEXTAUTH_SECRET as string,
    pages: {
        signIn: '/sign-in',
    },
}