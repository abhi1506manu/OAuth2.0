import mongoose from "mongoose";

const googleAuth = mongoose.Schema(
    {
        googleId:{
            type:String,
            required:true,
            unique: true
        },

        name:{
            type:String,
            required:true
        },

        email:{
            type:String,
            required:true
        }
        
    }
)

const User = mongoose.model("User",googleAuth);

export default User;