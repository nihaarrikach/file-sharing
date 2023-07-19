import mongoose from 'mongoose'

const DBConnection =async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/filesharing");
        console.log("database successfuly connected");
    }
    catch(error){
      console.error("error while connecting",error.message)
    }
}

export default DBConnection;

