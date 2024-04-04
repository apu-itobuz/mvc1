import mongoose from "mongoose";
const dbConnect = async()=>{
    await mongoose.connect("mongodb://localhost:27017/details")
    console.log("connect with database");
}
export default dbConnect;