import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
import dotenv from 'dotenv';
dotenv.config();




const Connection= async (url)=>{
    
    try{
        await mongoose.connect(url)
        console.log("Database Connected Successfully")
    }catch(error){
        console.log("Error while connecting",error)
    }
}

export default Connection