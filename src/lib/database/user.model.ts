import mongoose, {Schema, model, Document} from "mongoose";

interface User extends Document{
     username:string,
     password:string,
}

const userSchema:Schema<User>=new Schema<User>({
     username:{
         type:String,
         required:true,
         unique:true
     },
     password:{
        type:String,
        required:true,
        unique:true
     }
})

const User=mongoose.models.User||mongoose.model<User>("User",userSchema);
export default User;